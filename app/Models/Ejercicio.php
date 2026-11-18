<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['titulo', 'tipo', 'pregunta', 'opciones', 'respuesta_correcta', 'retroalimentacion'])]
class Ejercicio extends Model
{
    protected function casts(): array
    {
        return [
            'opciones' => 'array',
        ];
    }
}
