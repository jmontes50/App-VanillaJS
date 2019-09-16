class Modal {
  titulo = "";

  constructor(titulo) {
    this.titulo = titulo;
    this.setTitulo();
  }

  setTitulo() {
    let modalTitulo = document.getElementById("modalTitulo");
    modalTitulo.innerHTML = this.titulo;
  }

  modalCrearAlumno() {
    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `<form id="formulario">
                                    <table class="table">
                                        <tr>
                                            <td>Nombre del Alumno:</td>
                                            <td><input type="text" name="alum_nom" class="form-control"></td>
                                        </tr>
                                        <tr>
                                            <td>Apellidos del Alumno:</td>
                                            <td><input type="text" name="alum_apell" class="form-control"></td>
                                        </tr>
                                        <tr>
                                            <td>DNI del alumno:</td>
                                            <td><input type="number" name="alum_dni" step="1" value="" class="form-control"></td>
                                        </tr>
    
                                    </table>
                                    <input type="submit" class="btn btn-primary" value="Crear Alumno">
                                </form>`;
  }

  modalCrearCurso() {
    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `<form id="formulario">
                                <table class="table">
                                    <tr>
                                        <td>Nombre del Curso:</td>
                                        <td><input type="text" name="curso_nom" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>Descripción del Curso:</td>
                                        <td><input type="text" name="curso_desc" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>Año del Curso:</td>
                                        <td><input type="number" name="curso_anio"  min="2019" max="2099" step="1" value="2019" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>Docente del Curso:</td>
                                        <td><input type="text" name="curso_docente" class="form-control"></td>
                                    </tr>
                                </table>
                                <input type="submit" class="btn btn-primary" value="Crear Curso">
                            </form>`;
  }

  modalMatricular() {
    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `<table class="table" id="tablaModal">
                                <thead>
                                    <tr>
                                    <th>Nombre Alumno</th>
                                    <th>Marcar para añadir</th>
                                    </tr>
                                </thead>
                            </table>`;
  }

  listarAlumnosMatricula([arregloAlumnos, { curso_alumnos }]) {
    // console.log(arregloAlumnos);
    // console.log(curso_alumnos);
    let tablaModal = document.getElementById("tablaModal");
    let tbody = document.createElement("tbody");
    tablaModal.appendChild(tbody);

    arregloAlumnos.forEach(alumno => {
      let tr = document.createElement("tr");

      let tdNombres = document.createElement("td");
      tdNombres.innerHTML = `${alumno.alum_nom} ${alumno.alum_apell}`;
      tr.appendChild(tdNombres);

      let tdCheck = document.createElement("td");
      let inputCheck = document.createElement("input");
      inputCheck.setAttribute("type", "checkbox");
      inputCheck.setAttribute("idalumno", alumno.alum_id);

      curso_alumnos.forEach(idCurso => {
        if (alumno.alum_id == idCurso) {
          inputCheck.checked = true;
        }
      });

      inputCheck.className = "form-control checkboxs";
      tdCheck.appendChild(inputCheck);
      tr.appendChild(tdCheck);

      tbody.appendChild(tr);
      tablaModal.appendChild(tbody);
    });
    let btnGuardar = document.createElement("button");
    btnGuardar.className = "btn btn-primary";
    btnGuardar.setAttribute("id", "guardarMatricula");
    btnGuardar.innerHTML = "Guardar"
    tablaModal.appendChild(btnGuardar);
  }
}
