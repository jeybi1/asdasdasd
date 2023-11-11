function formLogin(e) {
    e.preventDefault(); 

    // Obtener elementos del formulario por su ID
    const usuario = document.getElementById("usuario"); // Obtiene el elemento con ID "usuario" 
    const contraseña = document.getElementById("contraseña"); // Obtiene el elemento con ID "clave"
   
    
    let validacionExitosa = true; // Inicializa una variable booleana como verdadera para rastrear la validación.

    // Comprueba si el campo de usuario o la clave están vacíos.
    if (usuario.value === "" || contraseña.value === "") {
        alert('Ingrese Usuario y Contraseña'); // Muestra una alerta si alguno de los campos está vacío.
        validacionExitosa = false; // Cambia la variable de validación a falso.
    }
    // Realiza más validaciones si la validación anterior fue exitosa.
    if (validacionExitosa) {
        if (usuario.value === "juan" && contraseña.value === "123") {
            // Verifica si el usuario y la clave son correctas.
            window.location = "registrarEvento.html"; // Redirige a la página de panel si coinciden.
        } else {
            alert('Error: El Usuario y la Contraseña no son correctos'); // Muestra un mensaje de error si no coinciden.
        }
    }
}