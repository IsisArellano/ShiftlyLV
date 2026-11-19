<?php

namespace Tests\Feature;

use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

/**
 * Comprueba que todas las páginas de Shiftly cargan sin errores
 * y que incluyen los scripts que necesitan para funcionar.
 *
 * Ejecutar con:  php artisan test
 */
class RutasTest extends TestCase
{
    public static function paginas(): array
    {
        return [
            'inicio' => ['/'],
            'contacto' => ['/contacto'],
            'servicios' => ['/servicios'],
            'login' => ['/login'],
            'registro' => ['/registro'],
            'recuperar password' => ['/recuperar-password'],
            'verificacion correo' => ['/verificacion-correo'],
            'nuevo password' => ['/new-password'],
            'perfil' => ['/perfil'],
            'dashboard' => ['/dashboard'],
            'ruta de aprendizaje' => ['/ruta-aprendizaje'],
            'diagnostico' => ['/diagnostico'],
            'ejercicios' => ['/ejercicios'],
            'glosario' => ['/glosario'],
            'recomendaciones' => ['/recomendaciones'],
            'resultado' => ['/resultado'],
            'resultados leccion' => ['/resultados-leccion'],
            'ruta sistemas' => ['/ruta-sistemas'],
            'ruta medicina' => ['/ruta-medicina'],
            'ruta gastronomia' => ['/ruta-gastronomia'],
            'ruta derecho' => ['/ruta-derecho'],
            'ruta arquitectura' => ['/ruta-arquitectura'],
            'ruta general' => ['/ruta-general'],
        ];
    }

    #[DataProvider('paginas')]
    public function test_la_pagina_carga_correctamente(string $url): void
    {
        $this->get($url)->assertOk();
    }

    public static function carreras(): array
    {
        return [
            ['sistemas'], ['medicina'], ['gastronomia'], ['derecho'], ['arquitectura'], ['general'],
        ];
    }

    #[DataProvider('carreras')]
    public function test_cada_ruta_carga_su_js_y_el_progreso_global(string $carrera): void
    {
        $this->get("/ruta-{$carrera}")
            ->assertOk()
            ->assertSee("js/ruta-{$carrera}.js", false)
            ->assertSee('js/rutas-catalogo.js', false)
            ->assertSee('js/shiftly-progreso.js', false)
            ->assertSee('js/voz-femenina.js', false);
    }

    public function test_ejercicios_carga_los_seis_bancos_y_la_ia(): void
    {
        $respuesta = $this->get('/ejercicios')->assertOk();

        foreach (['sistemas', 'medicina', 'gastronomia', 'derecho', 'arquitectura', 'general'] as $carrera) {
            $respuesta->assertSee("js/ejercicios-{$carrera}.js", false);
        }

        $respuesta->assertSee('js/openai-ejercicios.js', false)
            ->assertSee('js/ejercicios-leccion.js', false)
            ->assertSee('js/voz-femenina.js', false);
    }

    public function test_los_archivos_estaticos_existen(): void
    {
        $archivos = [
            'manifest.webmanifest',
            'sw.js',
            'js/pwa.js',
            'js/rutas-catalogo.js',
            'js/shiftly-progreso.js',
            'js/dashboard-progreso.js',
            'js/recomendaciones.js',
            'js/resultado.js',
            'img/pwa/icono-192.png',
            'img/pwa/icono-512.png',
        ];

        foreach ($archivos as $archivo) {
            $this->assertFileExists(public_path($archivo), "Falta public/{$archivo}");
        }
    }
}
