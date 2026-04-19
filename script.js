document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Evitamos que el formulario se envíe automáticamente
    event.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorDisplay = document.getElementById('error-msg');

    // 🛡️ REGLA DE SEGURIDAD 1: No permitir campos vacíos (doble check)
    if (user.trim() === "" || pass.trim() === "") {
        mostrarError("Todos los campos son obligatorios.");
        return;
    }

    // 🛡️ REGLA DE SEGURIDAD 2: Detectar caracteres sospechosos (Anti-Inyección)
    // Buscamos comillas, guiones de comentarios SQL o signos de igualdad
    const blackList = /['"=\-_;]/;
    if (blackList.test(user)) {
        mostrarError("Caracteres no permitidos detectados.");
        console.warn("Intento de inyección bloqueado en el cliente.");
        return;
    }

    // Si pasa las pruebas:
    errorDisplay.style.display = "none";
    alert("Datos validados correctamente. Enviando al servidor de forma segura...");

function mostrarError(mensaje) {
    const errorDisplay = document.getElementById('error-msg');
    errorDisplay.textContent = '⚠️' + (mensaje);
    errorDisplay.style.display = "block";
}

console.log("Enviando datos...");

    // Simulamos el envío a una API
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // 'POST' significa que estamos ENVIANDO datos
        body: JSON.stringify({
            title: user,
            body: pass,
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
        // Simulamos que si el usuario es "admin", el servidor rechaza el acceso
        if (user.toLowerCase() === "admin") {
            // Creamos un error manual para probar la lógica de seguridad
            throw new Error("ACCESO_DENEGADO");
        }
        return response.json();
    })
    .then(data => {
        // Este bloque solo corre si NO hubo error
        console.log("Respuesta exitosa:", data);
        alert("Bienvenido, " + user);
    })
    .catch(error => {
        // Este bloque atrapa tanto errores de red como nuestro error manual
        console.error("Detalle del error:", error.message);
        
        if (error.message === "ACCESO_DENEGADO") {
            mostrarError("Credenciales incorrectas. Intento registrado.");
        } else {
            mostrarError("Error de conexión con el servidor.");
        }
    });
});