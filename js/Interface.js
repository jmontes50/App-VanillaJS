class Interface {
  imprimirCursos(arregloCursos) {
    let contenidoCursos = document.getElementById("contenidoCursos");
    contenidoCursos.innerHTML = "";
    contenidoCursos.innerHTML = `<thead>
                                    <th>Curso</th>
                                    <th>Descripción</th>
                                    <th>Año</th>
                                    <th>Docente</th>
                                    <th>Agregar Alumno</th>
                                </thead>`;
    let tbody = document.createElement("tbody");

    contenidoCursos.appendChild(tbody);

    arregloCursos.forEach(curso => {
      let tr = document.createElement("tr");

      let tdNombre = document.createElement("td");
      tdNombre.innerHTML = curso.curso_nom;
      tr.appendChild(tdNombre);

      let tdDescripcion = document.createElement("td");
      tdDescripcion.innerHTML = curso.curso_desc;
      tr.appendChild(tdDescripcion);

      let tdAnio = document.createElement("td");
      tdAnio.innerHTML = curso.curso_anio;
      tr.appendChild(tdAnio);

      let tdDocente = document.createElement("td");
      tdDocente.innerHTML = curso.curso_docente;
      tr.appendChild(tdDocente);

      var tdAlumnos = document.createElement("td");
      var btnAlumnos = document.createElement("button");
      btnAlumnos.setAttribute("idcurso", curso.curso_id);
      btnAlumnos.setAttribute("data-toggle", "modal");
      btnAlumnos.setAttribute("data-target", "#modal");
      btnAlumnos.innerHTML = "Editar";
      btnAlumnos.className = "btn btn-primary matricular";
      tdAlumnos.appendChild(btnAlumnos);
      tr.appendChild(tdAlumnos);

      tbody.appendChild(tr);
    });
  }

  imprimirAlumnos(arregloAlumnos) {
    let contenidoAlumnos = document.getElementById("contenidoAlumnos");
    contenidoAlumnos.innerHTML = "";
    contenidoAlumnos.innerHTML = `<thead>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>DNI</th>
                                    </thead>`;
    let tbody = document.createElement("tbody");

    contenidoAlumnos.appendChild(tbody);

    arregloAlumnos.forEach(function(alumno) {
      let tr = document.createElement("tr");

      let tdNombres = document.createElement("td");
      tdNombres.innerHTML = alumno.alum_nom;
      tr.appendChild(tdNombres);

      let tdApellidos = document.createElement("td");
      tdApellidos.innerHTML = alumno.alum_apell;
      tr.appendChild(tdApellidos);

      let tdDni = document.createElement("td");
      tdDni.innerHTML = alumno.alum_dni;
      tr.appendChild(tdDni);

      tbody.appendChild(tr);
    });
  }
}
