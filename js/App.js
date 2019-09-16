window.onload = () => {
  let comunicacion = new Comunicacion();
  let interface = new Interface();

  let btnCrearAlumno = document.getElementById("btnCrearAlumno");
  let btnCrearCurso = document.getElementById("btnCrearCurso");


  function getPrintAlumnos() {
    comunicacion.obtenerAlumnos().then(alumnos => {
      interface.imprimirAlumnos(alumnos);
    });
  }

  function getPrintCursos() {
    comunicacion.obtenerCursos().then(cursos => {
      interface.imprimirCursos(cursos);
      matriculas();
    });
  }

  getPrintAlumnos();
  getPrintCursos();

  btnCrearAlumno.onclick = () => {
    let modal = new Modal("Crear Alumno");
    modal.modalCrearAlumno();

    var formulario = $("#formulario");

    formulario.submit(e => {
      e.preventDefault();

      var dataAlumno = formulario.serializeArray();
      var miAlumno = new Alumno();
      dataAlumno.forEach(function(input) {
        miAlumno[input.name] = input.value;
      });

      comunicacion.crearAlumno(miAlumno).then(alumno => {
        console.log(alumno);
        getPrintAlumnos();
        $("#modal").modal("hide");
      });
    });
  };

  btnCrearCurso.onclick = () => {
    let modal = new Modal("Crear Curso");
    modal.modalCrearCurso();

    var formulario = $("#formulario");

    formulario.submit(e => {
      e.preventDefault();

      var dataCurso = formulario.serializeArray();
      var miCurso = new Alumno();
      dataCurso.forEach(function(input) {
        miCurso[input.name] = input.value;
      });

      comunicacion.crearCurso(miCurso).then(curso => {
        console.log(curso);
        getPrintCursos();
        $("#modal").modal("hide");
      });
    });
  };

  function matriculas() {
    let botonesMatricular = document.querySelectorAll(".matricular");
    
    botonesMatricular.forEach(boton => {
        
      boton.onclick = () => {
        let modal = new Modal("Matricular Alumno");
        let idCurso = boton.getAttribute("idcurso");
        modal.modalMatricular();
        
        let misAlumnos = comunicacion.obtenerAlumnos();
        let miCurso = comunicacion.buscarCurso(idCurso);

        Promise.all([misAlumnos,miCurso]).then(resultados=>{
            modal.listarAlumnosMatricula(resultados);
            getCheckboxMatricula(resultados[1]);
        });
      };
    });
  }

  function getCheckboxMatricula(objCurso) {
    let checkboxs = document.querySelectorAll(".checkboxs");
    let guardarMatricula = document.getElementById("guardarMatricula");
    let miCurso = new Curso();
    Object.assign(miCurso, objCurso);
    console.table(miCurso)
    checkboxs.forEach(check =>{
        check.onclick = () =>{
            let idAlumno = check.getAttribute("idalumno");
            if(check.checked === true){
                miCurso.anadirAlumnos(idAlumno);
                
            }else{
                miCurso.removerAlumnos(idAlumno);
            }
        }
    });
    guardarMatricula.onclick = () => {
        comunicacion.actualizarCurso(miCurso);
        $("#modal").modal("hide");
    };
  }
  
};
