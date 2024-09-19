document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault();  

    // Obtener los valores de los inputs
    const actividad = document.querySelector('#actividad').value;
    const nota = document.querySelector('#nota').value;

    // Crear una nueva fila en la tabla
    const nuevaFila = document.createElement('tr');

    // Crear las celdas de la fila
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar'
    const eliminartd = document.createElement('td');
    eliminartd.appendChild(btnEliminar);
    const btnModificar = document.createElement('button');
    btnModificar.textContent = 'Modificar';
    const modificartd = document.createElement('td');
    modificartd.appendChild(btnModificar)
    const celdaActividad = document.createElement('td');
    const celdaNota = document.createElement('td');
    // Asignar los valores del formulario a las celdas
    celdaActividad.textContent = actividad;
    celdaNota.textContent = nota;

    // Añadir las celdas a la nueva fila
    nuevaFila.appendChild(eliminartd);
    nuevaFila.appendChild(modificartd);
    nuevaFila.appendChild(celdaActividad);
    nuevaFila.appendChild(celdaNota);

    // Añadir la nueva fila al cuerpo de la tabla
    document.querySelector('#actividades tbody').appendChild(nuevaFila);

    // Limpiar los campos del formulario
    document.querySelector('#formulario').reset();
});

