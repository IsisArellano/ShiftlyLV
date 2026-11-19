document.addEventListener("DOMContentLoaded", () => {
    // Selectores del DOM
    const formPerfil = document.getElementById("formularioPerfil");
    const inputNombre = document.getElementById("nombre-perfil");
    const inputApellido = document.getElementById("apellido-perfil");
    const inputEmail = document.getElementById("email-perfil");
    const selectArea = document.getElementById("area-perfil");
    const inputNivel = document.getElementById("nivel-perfil");

    const encabezadoNombre = document.getElementById("encabezadoNombre");
    const encabezadoSubtitulo = document.getElementById("encabezadoSubtitulo");
    const avatarIniciales = document.getElementById("avatarIniciales");
    const ultimaActualizacionTexto = document.getElementById("ultimaActualizacionTexto");
    const alertaPerfil = document.getElementById("alertaPerfil");

    const btnCancelar = document.getElementById("btnCancelarPerfil");
    const btnGuardar = document.getElementById("btnGuardarPerfil");
    const btnRestablecer = document.getElementById("btnRestablecerPerfil");

    let valoresOriginales = {};

    // Mostrar alertas
    function mostrarAlerta(mensaje, tipo = "success") {
        if (!alertaPerfil) return;

        const iconos = {
            success: "bi-check-circle-fill",
            warning: "bi-exclamation-triangle-fill",
            info: "bi-info-circle-fill",
            danger: "bi-x-circle-fill"
        };

        alertaPerfil.className =
            `alert alert-${tipo} fade show mb-4 rounded-4 py-2 px-3 small fw-bold`;

        alertaPerfil.innerHTML =
            `<i class="bi ${iconos[tipo] || "bi-info-circle-fill"} me-1"></i> ${mensaje}`;

        alertaPerfil.classList.remove("d-none");
    }

    // Actualizar encabezado y avatar
    function actualizarEncabezado() {
        const nom = inputNombre ? inputNombre.value.trim() : "";
        const ape = inputApellido ? inputApellido.value.trim() : "";
        const area = selectArea ? selectArea.value : "";

        if (encabezadoNombre) {
            encabezadoNombre.textContent =
                `${nom} ${ape}`.trim() || "Usuario";
        }

        if (encabezadoSubtitulo) {
            encabezadoSubtitulo.textContent =
                `${area} · Estudiante Shiftly`;
        }

        if (avatarIniciales) {
            const i1 = nom ? nom.charAt(0).toUpperCase() : "U";
            const i2 = ape ? ape.charAt(0).toUpperCase() : "";

            avatarIniciales.textContent = `${i1}${i2}`;
        }
    }

    // Guardar valores iniciales cargados desde Laravel
    function guardarEstadoOriginal() {
        valoresOriginales = {
            nombre: inputNombre ? inputNombre.value : "",
            apellido: inputApellido ? inputApellido.value : "",
            email: inputEmail ? inputEmail.value : "",
            area: selectArea ? selectArea.value : "",
            nivel: inputNivel ? inputNivel.value : ""
        };
    }

    // Restaurar los datos originales
    function restaurarPerfil() {
        if (inputNombre) inputNombre.value = valoresOriginales.nombre;
        if (inputApellido) inputApellido.value = valoresOriginales.apellido;
        if (inputEmail) inputEmail.value = valoresOriginales.email;
        if (selectArea) selectArea.value = valoresOriginales.area;
        if (inputNivel) inputNivel.value = valoresOriginales.nivel;

        actualizarEncabezado();
    }

    // Inicializar con los datos proporcionados por Laravel
    actualizarEncabezado();
    guardarEstadoOriginal();

    // Actualizar encabezado al editar
    if (inputNombre) {
        inputNombre.addEventListener("input", actualizarEncabezado);
    }

    if (inputApellido) {
        inputApellido.addEventListener("input", actualizarEncabezado);
    }

    if (selectArea) {
        selectArea.addEventListener("change", actualizarEncabezado);
    }

    // Enviar formulario a Laravel
    if (formPerfil) {
        formPerfil.addEventListener("submit", (evento) => {
            const nuevoNombre = inputNombre.value.trim();
            const nuevoApellido = inputApellido.value.trim();

            if (!nuevoNombre || nuevoNombre.length < 2) {
                evento.preventDefault();
                mostrarAlerta(
                    "Ingresa un nombre válido (mínimo 2 caracteres).",
                    "warning"
                );
                inputNombre.focus();
                return;
            }

            if (!nuevoApellido) {
                evento.preventDefault();
                mostrarAlerta(
                    "Ingresa tus apellidos.",
                    "warning"
                );
                inputApellido.focus();
                return;
            }

            // Permitir que el formulario llegue al controlador Laravel
            if (btnGuardar) {
                btnGuardar.disabled = true;
                btnGuardar.innerHTML =
                    `<span class="spinner-border spinner-border-sm me-1" role="status"></span> Guardando...`;
            }
        });
    }

    // Descartar cambios
    if (btnCancelar) {
        btnCancelar.addEventListener("click", () => {
            restaurarPerfil();
            mostrarAlerta(
                "Se descartaron los cambios no guardados.",
                "info"
            );
        });
    }

    // Restablecer los datos originales de la cuenta
    if (btnRestablecer) {
        btnRestablecer.addEventListener("click", () => {
            restaurarPerfil();
            mostrarAlerta(
                "Se restauraron los datos originales de tu cuenta.",
                "info"
            );
        });
    }
});
