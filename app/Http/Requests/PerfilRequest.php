<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PerfilRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nombre' => [
                'required',
                'string',
                'min:2',
                'max:255',
            ],
            'apellido' => [
                'required',
                'string',
                'max:255',
            ],
            'area_profesional' => [
                'required',
                Rule::in([
                    'Sistemas y Desarrollo',
                    'Medicina',
                    'Gastronomía',
                    'Derecho',
                    'Arquitectura',
                ]),
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'nombre.required' => 'El nombre es obligatorio.',
            'nombre.min' => 'El nombre debe tener al menos 2 caracteres.',
            'apellido.required' => 'El apellido es obligatorio.',
            'area_profesional.required' => 'Selecciona tu área profesional.',
            'area_profesional.in' => 'Selecciona un área profesional válida.',
        ];
    }
}
