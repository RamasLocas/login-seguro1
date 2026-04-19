- Proyecto de práctica enfocado en la construccion de una interfaz segura. 
- El objetivo principal fue implementar un sistema de autenticación que mitigue vulnerabilidades comunes en el frontend.

- Tecnologías utilizadas:

    HTML5 / CSS3 - (Estructura y Estilo)
    JavaScript Vanila - (Lógica de validación y seguridad)
    JSONPlaceholder API - (Simulación de backend)

- Características de Seguridad que se implementaron:

    1. Prevención de XSS (Cross-Site Scripting): Uso de `textContent` en lugar de `innerHTML` para el manejo de mensajes de error y datos dinámicos.
    2. Mitigación de SQL Injection: Implementación de expresiones regulares (Regex) para bloquear caracteres especiales como `'`, `--`, `;` y `=`.
    3. Manejo Seguro de Errores: Mensajes de autenticación genéricos para no revelar la existencia de usuarios reales.
    4. Validación de Tipos: Verificación de datos antes del envío al servidor.

- Cómo probarlo:

    1. Clonar el repositorio.
    2. Abrir `index.html` en tu navegador.
    3. Intenta ingresar un caracter especial (`'`{[-_]}) en el campo de usuario para que el bloqueo de seguridad se active.