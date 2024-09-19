document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los inputs
    const actividad = document.querySelector('#actividad').value;
    const nota = document.querySelector('#nota').value;

    // Crear una nueva fila con las celdas
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
        <td><button onclick="eliminarFila(this)" class="eliminar">Eliminar</button></td>
        <td><button onclick="modificarFila(this)" class="modificar">Modificar</button></td>
        <td>${actividad}</td>
        <td>${nota}</td>
    `;

    // Añadir la nueva fila al cuerpo de la tabla
    document.querySelector('#actividades tbody').appendChild(nuevaFila);

    // Limpiar los campos del formulario
    document.querySelector('#formulario').reset();
});

function eliminarFila(boton) {
    var confirmar = confirm("¿Está seguro de que desea eliminar esta fila?");
            if (confirmar) {
                var fila = boton.parentNode.parentNode;
                fila.parentNode.removeChild(fila);
            }
}

function modificarFila(boton){
    var fila = boton.parentNode.parentNode;
    var actividad = fila.cells[2].textContent;
    var nota = fila.cells[3].textContent;

    document.getElementById("actividad").value = actividad;
    document.getElementById("nota").value = nota;

    if(actividad &&  nota){
        fila.cells[2].textContent= actividad;
        fila.cells[3].textContent= notas;

    }
}