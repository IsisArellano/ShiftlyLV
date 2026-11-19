document.addEventListener('DOMContentLoaded', function () {
    // SELECTORES DEL FORMULARIO Y VISTA PREVIA
    const inputNombre = document.getElementById('username') || document.getElementById('nombreUsuario');
    const inputCorreo = document.getElementById('email') || document.getElementById('correoUsuario');
    const formularioPerfil = document.getElementById('formPerfil');
    const btnEliminar = document.getElementById('btnEliminarPerfil');

    const displayUsername = document.getElementById('displayUsername');
    const displayEmail = document.getElementById('displayEmail');

    const toastElemento = document.getElementById('toastNotificacion');
    const toastBootstrap = toastElemento && typeof bootstrap !== 'undefined' ? new bootstrap.Toast(toastElemento) : null;

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

    function validarNombre() {
        if (!inputNombre) return false;
        const valor = inputNombre.value.trim();

        if (valor.length >= 3) {
            inputNombre.classList.remove('is-invalid');
            inputNombre.classList.add('is-valid');
            return true;
        }

        inputNombre.classList.remove('is-valid');
        inputNombre.classList.add('is-invalid');
        return false;
    }

    function validarCorreo() {
        if (!inputCorreo) return false;
        const valor = inputCorreo.value.trim();
        const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (patronCorreo.test(valor)) {
            inputCorreo.classList.remove('is-invalid');
            inputCorreo.classList.add('is-valid');
            return true;
        }

        inputCorreo.classList.remove('is-valid');
        inputCorreo.classList.add('is-invalid');
        return false;
    }

    function manejarEnvioFormulario(evento) {
        evento.preventDefault();

        const esNombreValido = validarNombre();
        const esCorreoValido = validarCorreo();

        if (esNombreValido && esCorreoValido) {
            const usernameVal = inputNombre.value.trim();
            const emailVal = inputCorreo.value.trim();

            const partes = usernameVal.split(/\s+/);
            const perfilActualizado = {
                ...(leerJSON(STORAGE_KEY) || {}),
                nombre: partes[0],
                apellido: partes.slice(1).join(' '),
                email: emailVal,
                updatedAt: new Date().toISOString()
            };

            localStorage.setItem(STORAGE_KEY, JSON.stringify(perfilActualizado));

            if (displayUsername) displayUsername.textContent = usernameVal;
            if (displayEmail) displayEmail.textContent = emailVal;

            if (toastBootstrap) {
                toastBootstrap.show();
            }

            const modalElement = document.getElementById('modalCambiosGuardados');

            if (modalElement && typeof bootstrap !== 'undefined') {
                const modalExito = new bootstrap.Modal(modalElement);
                modalExito.show();
            }
        }
    }

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
