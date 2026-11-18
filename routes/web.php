<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EjercicioController;

/*
|--------------------------------------------------------------------------
| 1. Sitio Público (html/index)
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('html.index.index');
})->name('index');

// Carga directa de la vista contacto.blade.php (sin controlador)
Route::get('/contacto', function () {
    return view('html.index.contacto');
})->name('contacto');

Route::post('/contacto', function () {
    return redirect('/contacto')->with('exito', 'Mensaje enviado correctamente');
})->name('contacto.enviar');

Route::get('/servicios', function () {
    return view('html.index.servicios');
})->name('servicios');


/*
|--------------------------------------------------------------------------
| 2. Autenticación y Cuenta (html/login)
|--------------------------------------------------------------------------
*/

// Inicio de Sesión
Route::get('/login', function () {
    return view('html.login.login');
})->name('login');

Route::post('/login', function () {
    return redirect('/dashboard');
})->name('login.autenticar');

// Registro de Usuario
Route::get('/registro', function () {
    return view('html.login.registro');
})->name('registro');

Route::post('/registro', function () {
    return redirect('/login?registro=exitoso');
})->name('registro.registrar');

// Recuperación de Contraseña
Route::get('/recuperar-password', function () {
    return view('html.login.recuperar-password');
})->name('recuperar-password');

Route::post('/recuperar-password', function () {
    return redirect('/verificacion-correo');
})->name('password.email');

// Verificación de Correo Electrónico
Route::get('/verificacion-correo', function () {
    return view('html.login.verificacion-correo');
})->name('verificacion-correo');

// Restablecimiento de Contraseña
Route::get('/new-password/{token?}', function () {
    return view('html.login.new-password');
})->name('password.reset');

Route::post('/new-password', function () {
    return redirect('/login');
})->name('password.update');

// Perfil de Usuario (Simulado en cliente / Sin BD)
Route::get('/perfil', function () {
    return view('html.login.perfil');
})->name('perfil');

Route::post('/perfil', function () {
    return redirect('/perfil');
})->name('perfil.actualizar');


/*
|--------------------------------------------------------------------------
| 3. Módulos del Panel / Dashboard (html/dashboard)
|--------------------------------------------------------------------------
*/

Route::get('/dashboard', function () {
    return view('html.dashboard.dashboard');
})->name('dashboard');

Route::get('/ruta-aprendizaje', function () {
    return view('html.dashboard.rutaDeAprendizaje');
})->name('ruta-aprendizaje');

Route::get('/diagnostico', function () {
    return view('html.dashboard.diagnostico');
})->name('diagnostico');

Route::get('/ejercicios', function () {
    return view('html.dashboard.Ejercicios');
})->name('ejercicios');

Route::get('/glosario', function () {
    return view('html.dashboard.glosario');
})->name('glosario');

Route::get('/recomendaciones', function () {
    return view('html.dashboard.recomendaciones');
})->name('recomendaciones');

Route::get('/resultado', function () {
    return view('html.dashboard.resultado');
})->name('resultado');

Route::get('/resultados-leccion', function () {
    return view('html.dashboard.resultados-leccion');
})->name('resultados-leccion');


/*
|--------------------------------------------------------------------------
| 4. Árboles de Lecciones por Carrera (html/dashboard/ruta-*)
|--------------------------------------------------------------------------
| El progreso se guarda en localStorage (shiftly_progreso_<carrera>).
*/

Route::get('/ruta-sistemas', function () {
    return view('html.dashboard.ruta-sistemas');
})->name('ruta-sistemas');

Route::get('/ruta-medicina', function () {
    return view('html.dashboard.ruta-medicina');
})->name('ruta-medicina');

Route::get('/ruta-gastronomia', function () {
    return view('html.dashboard.ruta-gastronomia');
})->name('ruta-gastronomia');

Route::get('/ruta-derecho', function () {
    return view('html.dashboard.ruta-derecho');
})->name('ruta-derecho');

Route::get('/ruta-arquitectura', function () {
    return view('html.dashboard.ruta-arquitectura');
})->name('ruta-arquitectura');

Route::get('/ruta-general', function () {
    return view('html.dashboard.ruta-general');
})->name('ruta-general');
Route::resource('gestion/ejercicios', EjercicioController::class)
    ->except('show')
    ->parameters(['gestion/ejercicios' => 'ejercicio'])
    ->names([
        'index' => 'gestion.ejercicios.index',
        'create' => 'gestion.ejercicios.create',
        'store' => 'gestion.ejercicios.store',
        'edit' => 'gestion.ejercicios.edit',
        'update' => 'gestion.ejercicios.update',
        'destroy' => 'gestion.ejercicios.destroy',
    ]);
