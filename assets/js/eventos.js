document.addEventListener('DOMContentLoaded', function() {
    // Agrega el evento de envío del formulario de registro
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío del formulario

        // Obtiene los valores del formulario
        var nombre = document.getElementById('nombreEnc').value;
        var apellidoPaterno = document.getElementById('nombreEve').value;
        var apellidoMaterno = document.getElementById('desc').value;
        var telefono = document.getElementById('doc').value;
        var fecha = document.getElementById('fecha').value;

        // Crea una nueva fila en la tabla de pacientes registrados
        var tabla = document.querySelector('.tabla-pacientes tbody');
        var fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${nombreEnc}</td>
            <td>${nombreEve}</td>
            <td>${desc}</td>
            <td>${doc}</td>
            <td>${ci}</td>
            <td>${fecha}</td>
        `;
        tabla.appendChild(fila);

        // Limpia los campos del formulario
        document.querySelector('form').reset();
    });
});