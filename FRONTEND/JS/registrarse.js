function mostrarError(mensaje) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "alert alert-danger mt-2";
    errorDiv.textContent = mensaje;

    document.querySelector(".register-card").prepend(errorDiv);
    document.querySelectorAll(".alert").forEach(el => el.remove());

    setTimeout(() => errorDiv.remove(), 3000);
}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let identificacion = document.getElementById("identificacion").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (!nombre || !identificacion || !correo || !telefono || !password || !confirmPassword) {
            alert("Todos los campos son obligatorios");
        }

        if (nombre.length < 3) {
            alert("El nombre debe tener al menos 3 caracteristicas");
            return;
        }

        if (!/^[0-9]+$/.test(identificacion)) {
            alert("La identificacion solo debe tener numeros");
            return;
        }

        let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correo)) {
            alert("Ingresa un correo electronico valido");
            return;
        }

        if (!/^[0-9]{10}$/.test(telefono)) {
            alert("El telefono debe tener 10 digitos");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener minimo 6 caracteres");
            return;
        }

        if (password !== confirmPassword) {
            alert("La contraseña no coinciden");
            return;
        }

        alert("Registro exitoso");

        form.reset();

        const usuario = {
            nombre,
            identificacion,
            correo,
            telefono
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));
    });
});

function togglePassword(inInput, icono) {
    const input = document.getElementById(inInput);

    if (input.type === "password") {
        input.type = "text";
        icono.classList.remove("bi-eye");
        icono.classList.add("bi-eye-slash");
    } else {
        input.type = "password";
        icono.classList.remove("bi-eye-slash");
        icono.classList.add("bi-eye");
    }
}
