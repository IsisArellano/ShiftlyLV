<?php

namespace App\Http\Controllers;

 feature/crud-ejercicios-pr
use App\Models\Ejercicio;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

use App\Http\Requests\EjercicioRequest;
use App\Models\Ejercicio;
 main

class EjercicioController extends Controller
{
    public function index()
    {
        return view('html.dashboard.gestion-ejercicios', [
            'ejercicios' => Ejercicio::latest()->get(),
            'ejercicio' => null,
        ]);
    }

    public function create()
    {
        return view('html.dashboard.gestion-ejercicios', [
            'ejercicios' => Ejercicio::latest()->get(),
            'ejercicio' => new Ejercicio(['tipo' => 'completar']),
        ]);
    }

 feature/crud-ejercicios-pr
    public function store(Request $request)
    {
        Ejercicio::create($this->datosValidados($request));

    public function store(EjercicioRequest $request)
    {
        $datos = $this->prepararDatos($request);

        Ejercicio::create($datos);
 main

        return redirect()->route('gestion.ejercicios.index')
            ->with('success', 'El ejercicio se creó correctamente.');
    }

    public function edit(Ejercicio $ejercicio)
    {
        return view('html.dashboard.gestion-ejercicios', [
            'ejercicios' => Ejercicio::latest()->get(),
            'ejercicio' => $ejercicio,
        ]);
    }

 feature/crud-ejercicios-pr
    public function update(Request $request, Ejercicio $ejercicio)
    {
        $ejercicio->update($this->datosValidados($request));

    public function update(
        EjercicioRequest $request,
        Ejercicio $ejercicio
    ) {
        $datos = $this->prepararDatos($request);

        $ejercicio->update($datos);
 main

        return redirect()->route('gestion.ejercicios.index')
            ->with('success', 'El ejercicio se actualizó correctamente.');
    }

    public function destroy(Ejercicio $ejercicio)
    {
        $ejercicio->delete();

        return redirect()->route('gestion.ejercicios.index')
            ->with('success', 'El ejercicio se eliminó correctamente.');
    }

 feature/crud-ejercicios-pr
    private function datosValidados(Request $request): array
    {
        $datos = $request->validate([
            'titulo' => ['required', 'string', 'max:150'],
            'tipo' => ['required', Rule::in(['completar', 'opcion_multiple', 'ordenar', 'emparejar'])],
            'pregunta' => ['required', 'string', 'max:2000'],
            'opciones' => ['nullable', 'string', 'max:5000'],
            'respuesta_correcta' => ['nullable', 'required_unless:tipo,emparejar', 'string', 'max:1000'],
            'retroalimentacion' => ['nullable', 'string', 'max:1000'],
        ], [
            'titulo.required' => 'Escribe un título para el ejercicio.',
            'tipo.in' => 'Selecciona un tipo de ejercicio válido.',
            'pregunta.required' => 'Escribe la consigna o pregunta.',
            'respuesta_correcta.required_unless' => 'Escribe la respuesta correcta para este tipo de ejercicio.',
        ]);

        $opciones = preg_split('/\R/u', $datos['opciones'] ?? '') ?: [];
        $opciones = array_values(array_filter(array_map('trim', $opciones), fn ($opcion) => $opcion !== ''));

        if ($datos['tipo'] === 'opcion_multiple') {
            $respuestaIncluida = collect($opciones)->contains(
                fn ($opcion) => Str::lower($opcion) === Str::lower(trim($datos['respuesta_correcta']))
            );

            if (count($opciones) < 2 || ! $respuestaIncluida) {
                throw ValidationException::withMessages([
                    'opciones' => 'Agrega al menos dos opciones e incluye entre ellas la respuesta correcta.',
                ]);
            }
        }

        if ($datos['tipo'] === 'emparejar') {
            $paresValidos = count($opciones) >= 2 && collect($opciones)->every(function ($opcion) {
                $partes = explode('=', $opcion, 2);

                return count($partes) === 2 && trim($partes[0]) !== '' && trim($partes[1]) !== '';
            });

            if (! $paresValidos) {
                throw ValidationException::withMessages([
                    'opciones' => 'Escribe al menos dos pares, uno por línea, con el formato inglés = español.',
                ]);
            }
        }

        $datos['opciones'] = $opciones ?: null;
        $datos['respuesta_correcta'] = $datos['respuesta_correcta'] ?? null;
        $datos['retroalimentacion'] = $datos['retroalimentacion'] ?? null;

    private function prepararDatos(EjercicioRequest $request): array
    {
        $datos = $request->validated();

        $opciones = preg_split(
            '/\R/u',
            $datos['opciones'] ?? ''
        ) ?: [];

        $opciones = array_values(array_filter(
            array_map('trim', $opciones),
            fn ($opcion) => $opcion !== ''
        ));

        $datos['opciones'] = $opciones ?: null;
        $datos['respuesta_correcta'] =
            $datos['respuesta_correcta'] ?? null;
        $datos['retroalimentacion'] =
            $datos['retroalimentacion'] ?? null;
 main

        return $datos;
    }
}
