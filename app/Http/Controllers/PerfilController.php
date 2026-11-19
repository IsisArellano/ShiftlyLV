<?php

namespace App\Http\Controllers;

use App\Http\Requests\PerfilRequest;
use Illuminate\Support\Facades\Auth;

class PerfilController extends Controller
{
    public function actualizar(PerfilRequest $request)
    {
        $datos = $request->validated();

        $usuario = Auth::user();

        $usuario->name = $datos['nombre'];
        $usuario->apellido = $datos['apellido'];
        $usuario->area_profesional = $datos['area_profesional'];

        $usuario->save();

        return back()->with(
            'success',
            '¡Tu perfil se actualizó correctamente!'
        );
    }
}
