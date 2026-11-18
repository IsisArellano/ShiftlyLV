# Generador de rutas de carrera

Crea los árboles de lecciones gamificados de Shiftly a partir de un solo archivo de datos.

| Archivo | Qué contiene |
|---|---|
| `areas.py` | Las 6 carreras: nombre, ícono, clave de `localStorage`, formas SVG de los nodos, conectores, fondos y las 8 lecciones de cada una |
| `plantilla_css.py` | Estilos comunes de las rutas (paleta de `index.css`) |
| `plantilla_js.py` | Lógica común: árbol serpenteante, CRUD de lecciones, enlaces a `/ejercicios` |
| `generar.py` | Vista Blade y escritura de los archivos |

## Uso

Desde la raíz del proyecto:

```bash
python tools/generar-rutas/generar.py
```

Genera (y **sobrescribe**):

- `resources/views/html/dashboard/ruta-<carrera>.blade.php`
- `public/css/ruta-<carrera>.css`
- `public/js/ruta-<carrera>.js`
- `public/js/rutas-catalogo.js` (catálogo que usan el Dashboard, Recomendaciones y Resultados)

## Reglas

- No edites a mano esos archivos generados: haz el cambio aquí y vuelve a ejecutar el script.
- Si cambias el título, el orden o el XP de una lección en `areas.py`, actualiza también su banco
  `public/js/ejercicios-<carrera>.js` (los IDs `<carrera>-01 … -08` deben coincidir).
