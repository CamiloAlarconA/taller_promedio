let filaAEditar = null;

document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const actividad = document.querySelector('#actividad').value;
    const nota = document.querySelector('#nota').value;

    if (filaAEditar) {
        filaAEditar.cells[2].textContent = actividad;
        filaAEditar.cells[3].textContent = nota;

        filaAEditar = null;
    } else {
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td><button onclick="eliminarFila(this)" class="eliminar">Eliminar</button></td>
            <td><button onclick="modificarFila(this)" class="modificar">Modificar</button></td>
            <td>${actividad}</td>
            <td>${nota}</td>
        `;

        document.querySelector('#actividades tbody').appendChild(nuevaFila);
    }

    document.querySelector('#formulario').reset();
    calcularPromedio();
    estado();
});

function eliminarFila(boton) {
    var confirmar = confirm("¿Está seguro de que desea eliminar esta fila?");
    if (confirmar) {
        var fila = boton.parentNode.parentNode;
        fila.parentNode.removeChild(fila);
    }

    calcularPromedio();
    estado();
}

function modificarFila(boton){
    filaAEditar = boton.parentNode.parentNode;

    document.getElementById("actividad").value = filaAEditar.cells[2].textContent;
    document.getElementById("nota").value = filaAEditar.cells[3].textContent;
}

function calcularPromedio() {
    const filas = document.querySelectorAll('#actividades tbody tr');
    let suma = 0;
    let cantidad = 0;

    filas.forEach(function(fila) {
        const nota = parseFloat(fila.cells[3].textContent);

        if (!isNaN(nota)) {  
            suma += nota;  
            cantidad++;       
        }
    });

    let promedio = cantidad > 0 ? (suma / cantidad) : 0;

    document.getElementById("promedio").value = promedio;
}

function estado(){
    let promedio = parseFloat(document.getElementById("promedio").value);

    if (!isNaN(promedio)) {
        if (promedio >= 3.0) {
            document.getElementById("estado").value = "Aprobado";
        } else {
            document.getElementById("estado").value = "No aprobado";
        }
    } else {
        document.getElementById("estado").value = "No calculado";
    }
}