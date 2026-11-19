<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class EjercicioRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'titulo' => ['required', 'string', 'max:150'],
            'tipo' => [
                'required',
                Rule::in([
                    'completar',
                    'opcion_multiple',
                    'ordenar',
                    'emparejar',
                ]),
            ],
            'pregunta' => ['required', 'string', 'max:2000'],
            'opciones' => ['nullable', 'string', 'max:5000'],
            'respuesta_correcta' => [
                'nullable',
                'required_unless:tipo,emparejar',
                'string',
                'max:1000',
            ],
            'retroalimentacion' => ['nullable', 'string', 'max:1000'],
        ];
    }

    public function messages(): array
    {
        return [
            'titulo.required' => 'Escribe un título para el ejercicio.',
            'tipo.in' => 'Selecciona un tipo de ejercicio válido.',
            'pregunta.required' => 'Escribe la consigna o pregunta.',
            'respuesta_correcta.required_unless' =>
                'Escribe la respuesta correcta para este tipo de ejercicio.',
        ];
    }

    public function withValidator($validator): void
    {
        $validator->after(function ($validator) {
            if ($validator->errors()->isNotEmpty()) {
                return;
            }

            $opciones = preg_split(
                '/\R/u',
                (string) $this->input('opciones', '')
            ) ?: [];

            $opciones = array_values(array_filter(
                array_map('trim', $opciones),
                fn ($opcion) => $opcion !== ''
            ));

            if ($this->input('tipo') === 'opcion_multiple') {
                $respuesta = trim(
                    (string) $this->input('respuesta_correcta', '')
                );

                $respuestaIncluida = collect($opciones)->contains(
                    fn ($opcion) =>
                        Str::lower($opcion) === Str::lower($respuesta)
                );

                if (count($opciones) < 2 || ! $respuestaIncluida) {
                    $validator->errors()->add(
                        'opciones',
                        'Agrega al menos dos opciones e incluye entre ellas la respuesta correcta.'
                    );
                }
            }

            if ($this->input('tipo') === 'emparejar') {
                $paresValidos = count($opciones) >= 2
                    && collect($opciones)->every(function ($opcion) {
                        $partes = explode('=', $opcion, 2);

                        return count($partes) === 2
                            && trim($partes[0]) !== ''
                            && trim($partes[1]) !== '';
                    });

                if (! $paresValidos) {
                    $validator->errors()->add(
                        'opciones',
                        'Escribe al menos dos pares, uno por línea, con el formato inglés = español.'
                    );
                }
            }
        });
    }
}
