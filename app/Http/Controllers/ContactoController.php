<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactoRequest;

class ContactoController extends Controller
{
    public function index()
    {
        return view('html.index.contacto');
    }

    public function enviar(ContactoRequest $request)
    {
        $datos = $request->validated();

        return back()->with(
            'success',
            '¡Tu mensaje se ha recibido correctamente!'
        );
    }
}
