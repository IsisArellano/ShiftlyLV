<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shiftly | Gestión de ejercicios</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body class="bg-light">
    <header class="bg-white border-bottom py-3">
        <div class="container d-flex justify-content-between align-items-center">
            <a class="navbar-brand fw-bold text-decoration-none" href="{{ route('ejercicios') }}">Shiftly</a>
            <a class="btn btn-outline-secondary btn-sm" href="{{ route('ejercicios') }}">Volver a ejercicios</a>
        </div>
    </header>

    <main class="container py-5">
        <div class="mb-4">
            <p class="text-uppercase small fw-semibold text-muted mb-1">Panel de contenido</p>
            <h1 class="h2 fw-bold">Gestión de ejercicios</h1>
            <p class="text-muted mb-0">Crea, consulta, edita y elimina ejercicios guardados en la base de datos.</p>
        </div>

       @include('partials.alertas')

        <div class="row g-4 align-items-start">
            <section class="col-lg-5" aria-labelledby="form-title">
                <div class="card border-0 shadow-sm rounded-4">
                    <div class="card-body p-4">
                        @php($editando = $ejercicio?->exists ?? false)
                        @php($opcionesTexto = old('opciones', implode("\n", $ejercicio?->opciones ?? [])))

                        <h2 class="h5 fw-bold mb-3" id="form-title">
                            {{ $editando ? 'Editar ejercicio' : 'Nuevo ejercicio' }}
                        </h2>

                        <form method="POST" action="{{ $editando ? route('gestion.ejercicios.update', $ejercicio) : route('gestion.ejercicios.store') }}">
                            @csrf
                            @if ($editando)
                                @method('PUT')
                            @endif

                            <div class="mb-3">
                                <label class="form-label" for="titulo">Título <span class="text-danger">*</span></label>
                                <input class="form-control @error('titulo') is-invalid @enderror" id="titulo" name="titulo" value="{{ old('titulo', $ejercicio?->titulo) }}" maxlength="150" required>
                                @error('titulo')<div class="invalid-feedback">{{ $message }}</div>@enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="tipo">Tipo de ejercicio <span class="text-danger">*</span></label>
                                <select class="form-select @error('tipo') is-invalid @enderror" id="tipo" name="tipo" required>
                                    <option value="completar" @selected(old('tipo', $ejercicio?->tipo ?? 'completar') === 'completar')>Completar la frase</option>
                                    <option value="opcion_multiple" @selected(old('tipo', $ejercicio?->tipo) === 'opcion_multiple')>Opción múltiple</option>
                                    <option value="ordenar" @selected(old('tipo', $ejercicio?->tipo) === 'ordenar')>Ordenar palabras</option>
                                    <option value="emparejar" @selected(old('tipo', $ejercicio?->tipo) === 'emparejar')>Emparejar</option>
                                </select>
                                @error('tipo')<div class="invalid-feedback">{{ $message }}</div>@enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="pregunta">Consigna o pregunta <span class="text-danger">*</span></label>
                                <textarea class="form-control @error('pregunta') is-invalid @enderror" id="pregunta" name="pregunta" rows="3" maxlength="2000" required>{{ old('pregunta', $ejercicio?->pregunta) }}</textarea>
                                @error('pregunta')<div class="invalid-feedback">{{ $message }}</div>@enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="opciones">Opciones o pares <span class="text-danger">*</span></label>
                                <textarea class="form-control @error('opciones') is-invalid @enderror" id="opciones" name="opciones" rows="4" maxlength="5000" aria-describedby="ayuda-opciones">{{ $opcionesTexto }}</textarea>
                                <div class="form-text" id="ayuda-opciones">Una opción por línea. Para emparejar, escribe inglés = español en cada línea.</div>
                                @error('opciones')<div class="invalid-feedback">{{ $message }}</div>@enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="respuesta_correcta">Respuesta correcta <span class="text-danger">*</span></label>
                                <input class="form-control @error('respuesta_correcta') is-invalid @enderror" id="respuesta_correcta" name="respuesta_correcta" value="{{ old('respuesta_correcta', $ejercicio?->respuesta_correcta) }}" maxlength="1000" aria-describedby="ayuda-respuesta">
                                <div class="form-text" id="ayuda-respuesta">Para opción múltiple debe coincidir con una opción. En emparejar se usan los pares de arriba.</div>
                                @error('respuesta_correcta')<div class="invalid-feedback">{{ $message }}</div>@enderror
                            </div>

                            <div class="mb-4">
                                <label class="form-label" for="retroalimentacion">Retroalimentación (opcional)</label>
                                <textarea class="form-control @error('retroalimentacion') is-invalid @enderror" id="retroalimentacion" name="retroalimentacion" rows="2" maxlength="1000">{{ old('retroalimentacion', $ejercicio?->retroalimentacion) }}</textarea>
                                @error('retroalimentacion')<div class="invalid-feedback">{{ $message }}</div>@enderror
                            </div>

                            <div class="d-flex gap-2">
                                <button class="btn btn-primary" type="submit">{{ $editando ? 'Guardar cambios' : 'Crear ejercicio' }}</button>
                               @if ($editando)
    <a class="btn btn-outline-secondary" href="{{ route('gestion.ejercicios.index') }}">Cancelar</a>
@endif 
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section class="col-lg-7" aria-labelledby="list-title">
                <div class="card border-0 shadow-sm rounded-4">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h2 class="h5 fw-bold mb-0" id="list-title">Ejercicios guardados</h2>
                            <span class="badge text-bg-secondary">{{ $ejercicios->count() }}</span>
                        </div>

                        @if ($ejercicios->isEmpty())
                            <p class="text-muted mb-0">Todavía no hay ejercicios. Usa el formulario para crear el primero.</p>
                        @else
                            <div class="table-responsive">
                                <table class="table align-middle">
                                    <thead>
                                        <tr><th scope="col">Ejercicio</th><th scope="col">Tipo</th><th scope="col"><span class="visually-hidden">Acciones</span></th></tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($ejercicios as $item)
                                            <tr>
                                                <td>
                                                    <strong>{{ $item->titulo }}</strong>
                                                    <div class="small text-muted">{{ \Illuminate\Support\Str::limit($item->pregunta, 90) }}</div>
                                                </td>
                                                <td><span class="badge text-bg-light">{{ str_replace('_', ' ', $item->tipo) }}</span></td>
                                                <td>
                                                    <div class="d-flex gap-2 justify-content-end">
                                                        <a class="btn btn-sm btn-outline-primary" href="{{ route('gestion.ejercicios.edit', $item) }}">Editar</a>
                                                        <form method="POST" action="{{ route('gestion.ejercicios.destroy', $item) }}" onsubmit="return confirm('¿Eliminar este ejercicio?')">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button class="btn btn-sm btn-outline-danger" type="submit">Eliminar</button>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        @endif
                    </div>
                </div>
            </section>
        </div>
    </main>
</body>
</html>
