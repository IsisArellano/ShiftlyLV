<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\RecuperarPasswordController;

/*
|--------------------------------------------------------------------------
| Rutas Principales / Sitio Público
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('html.index.index');
});

Route::get('/contacto', function () {
    return view('html.index.contacto');
});

Route::post('/contacto', function () {
    return redirect('/contacto')->with('exito', 'Mensaje enviado correctamente');
})->name('contacto.enviar');

Route::get('/servicios', function () {
    return view('html.index.servicios');
});

/*
|--------------------------------------------------------------------------
| Rutas de Autenticación / Cuenta
|--------------------------------------------------------------------------
*/

Route::get('/login', function () {
    return view('html.login.login');
});

Route::get('/registro', function () {
    return view('html.login.registro');
});

Route::post('/registro', function () {
    return redirect('/login?registro=exitoso');
})->name('registro.registrar');

// Recuperación de contraseña
Route::get('/recuperar-password', function () {
    return view('html.login.recuperar-password');
})->name('recuperar-password');

Route::post('/recuperar-password', [RecuperarPasswordController::class, 'enviarEnlace'])
    ->name('password.email');

// Verificación de correo electrónico
Route::get('/verificacion-correo', function () {
    return view('html.login.verificacion-correo');
})->name('verificacion-correo');

// Restablecimiento de contraseña
Route::get('/new-password/{token?}', function () {
    return view('html.login.new-password');
})->name('password.reset');

Route::post('/new-password', function () {
    return redirect('/login');
})->name('password.update');

// Perfil de usuario
Route::get('/perfil', function () {
    return view('html.login.perfil');
});

Route::post('/perfil', function () {
    return redirect('/perfil');
})->name('perfil.actualizar');

/*
|--------------------------------------------------------------------------
| Rutas del Dashboard / Panel de Usuario
|--------------------------------------------------------------------------
*/

Route::get('/dashboard', function () {
    return view('html.dashboard.dashboard');
});

Route::get('/diagnostico', function () {
    return view('html.dashboard.diagnostico');
});

Route::get('/ejercicios', function () {
    return view('html.dashboard.Ejercicios');
});

Route::get('/glosario', function () {
    return view('html.dashboard.glosario');
});

Route::get('/recomendaciones', function () {
    return view('html.dashboard.recomendaciones');
});

Route::get('/resultado', function () {
    return view('html.dashboard.resultado');
});

Route::get('/resultados-leccion', function () {
    return view('html.dashboard.resultados-leccion');
});

Route::get('/ruta-aprendizaje', function () {
    return view('html.dashboard.rutaDeAprendizaje');
});

/*
|--------------------------------------------------------------------------
| CRUD de Productos
|--------------------------------------------------------------------------
*/

Route::resource('productos', ProductoController::class);
