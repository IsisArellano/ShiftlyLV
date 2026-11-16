document.addEventListener('DOMContentLoaded', function () {
    // SELECTORES DEL FORMULARIO Y VISTA PREVIA
    const inputNombre = document.getElementById('username') || document.getElementById('nombreUsuario');
    const inputCorreo = document.getElementById('email') || document.getElementById('correoUsuario');
    const formularioPerfil = document.getElementById('formPerfil');
    const btnEliminar = document.getElementById('btnEliminarPerfil');

    const displayUsername = document.getElementById('displayUsername');
    const displayEmail = document.getElementById('displayEmail');

    // Toast (si existe en tu HTML) y Modal emergente
    const toastElemento = document.getElementById('toastNotificacion');
    const toastBootstrap = toastElemento && typeof bootstrap !== 'undefined' ? new bootstrap.Toast(toastElemento) : null;

    // Misma clave que usa perfil.js e index.blade.php para que el perfil sea uno solo
    const STORAGE_KEY = 'shiftly_user_profile_full';
    const SESSION_KEY = 'shiftly_usuario_activo';

    function leerJSON(clave) {
        try {
            return JSON.parse(localStorage.getItem(clave) || 'null');
        } catch (e) {
            return null;
        }
    }

    function mostrarPerfil(nombre, correo) {
        if (inputNombre) inputNombre.value = nombre;
        if (inputCorreo) inputCorreo.value = correo;
        if (displayUsername) displayUsername.textContent = nombre || 'Usuario';
        if (displayEmail) displayEmail.textContent = correo || 'ejemplo@correo.com';
    }

    // --- 1. LEER (READ): perfil guardado, luego sesión activa, luego valores demo ---
    function cargarDatosPerfil() {
        const perfil = leerJSON(STORAGE_KEY);
        const sesion = leerJSON(SESSION_KEY);

        if (perfil) {
            const nombreCompleto = [perfil.nombre, perfil.apellido].filter(Boolean).join(' ');
            mostrarPerfil(nombreCompleto, perfil.email || '');
        } else if (sesion) {
            mostrarPerfil(sesion.nombre || '', sesion.email || '');
        } else {
            mostrarPerfil('Usuario Demo', 'usuario@shiftly.com');
        }
    }

    cargarDatosPerfil();

    // --- FUNCIONES DE VALIDACIÓN ORIGINALES ---
    function validarNombre() {
        if (!inputNombre) return false;
        const valor = inputNombre.value.trim();
        if (valor.length >= 3) {
            inputNombre.classList.remove('is-invalid');
            inputNombre.classList.add('is-valid');
            return true;
        } else {
            inputNombre.classList.remove('is-valid');
            inputNombre.classList.add('is-invalid');
            return false;
        }
    }

    function validarCorreo() {
        if (!inputCorreo) return false;
        const valor = inputCorreo.value.trim();
        const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (patronCorreo.test(valor)) {
            inputCorreo.classList.remove('is-invalid');
            inputCorreo.classList.add('is-valid');
            return true;
        } else {
            inputCorreo.classList.remove('is-valid');
            inputCorreo.classList.add('is-invalid');
            return false;
        }
    }

    // --- 2. CREAR / ACTUALIZAR (CREATE / UPDATE): Guardar y notificar ---
    function manejarEnvioFormulario(evento) {
        evento.preventDefault();

        const esNombreValido = validarNombre();
        const esCorreoValido = validarCorreo();

        if (esNombreValido && esCorreoValido) {
            const usernameVal = inputNombre.value.trim();
            const emailVal = inputCorreo.value.trim();

            // Guardar en localStorage conservando los demás campos del perfil (área, nivel...)
            const partes = usernameVal.split(/\s+/);
            const perfilActualizado = {
                ...(leerJSON(STORAGE_KEY) || {}),
                nombre: partes[0],
                apellido: partes.slice(1).join(' '),
                email: emailVal,
                updatedAt: new Date().toISOString()
            };

            localStorage.setItem(STORAGE_KEY, JSON.stringify(perfilActualizado));

            // Actualizar vista previa dinámica
            if (displayUsername) displayUsername.textContent = usernameVal;
            if (displayEmail) displayEmail.textContent = emailVal;

            // Mostrar Toast si existe
            if (toastBootstrap) {
                toastBootstrap.show();
            }

            // Desplegar Modal emergente "Los cambios se guardaron correctamente"
            const modalElement = document.getElementById('modalCambiosGuardados');
            if (modalElement && typeof bootstrap !== 'undefined') {
                const modalExito = new bootstrap.Modal(modalElement);
                modalExito.show();
            }
        }
    }

    // --- 3. ELIMINAR (DELETE): Limpiar perfil ---
    if (btnEliminar) {
        btnEliminar.addEventListener('click', function () {
            if (confirm('¿Estás seguro de que deseas eliminar la información de tu perfil local?')) {
                localStorage.removeItem(STORAGE_KEY);

                if (inputNombre) {
                    inputNombre.value = '';
                    inputNombre.classList.remove('is-valid', 'is-invalid');
                }
                if (inputCorreo) {
                    inputCorreo.value = '';
                    inputCorreo.classList.remove('is-valid', 'is-invalid');
                }

                if (displayUsername) displayUsername.textContent = 'Sin Nombre';
                if (displayEmail) displayEmail.textContent = 'Sin Correo';
            }
        });
    }

    // EVENT LISTENERS DE VALIDACIÓN E INTERACCIÓN
    if (inputNombre) {
        inputNombre.addEventListener('input', validarNombre);
        inputNombre.addEventListener('blur', validarNombre);
    }

    if (inputCorreo) {
        inputCorreo.addEventListener('input', validarCorreo);
        inputCorreo.addEventListener('blur', validarCorreo);
    }

    if (formularioPerfil) {
        formularioPerfil.addEventListener('submit', manejarEnvioFormulario);
    }
});