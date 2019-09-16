const RUTA_BASE = "https://5d4b6adb00dbb10014879b12.mockapi.io";

class Comunicacion{
    obtenerAlumnos(){
        return new Promise ((resolve,reject) => {
            fetch(`${RUTA_BASE}/alumnos`)
                                        .then((respuesta) => {
                                            return respuesta.json();
                                        }).then((arregloAlumnos)=>{
                                            resolve(arregloAlumnos);
                                        }).catch(error => {
                                            reject(`Ha ocurrido un error: ${error}`);
                                        });
        });
    }//obtenerAlumnos

    crearAlumno(objAlumno){
        return new Promise ((resolve,reject) => {
            let configuracion = {
                method:'POST',
                body: JSON.stringify(objAlumno),
                headers: {'Content-Type':'application/json'}
            }
            fetch(`${RUTA_BASE}/alumnos`,configuracion)
                                                        .then((respuesta)=>{
                                                            return respuesta.json();
                                                        }).then((alumnoCreado)=>{
                                                            resolve(alumnoCreado);
                                                        }).catch(error =>{
                                                            reject(`Ha ocurrido un error: ${error}`);
                                                        });
        });
    }

    obtenerCursos(){
        return new Promise ((resolve,reject)=>{
            fetch(`${RUTA_BASE}/cursos`)
                                        .then((respuesta) => {
                                            return respuesta.json();
                                        }).then((arregloCursos) => {
                                            resolve(arregloCursos)
                                        }).catch((error) => {
                                            reject(`Ha ocurrido un error: ${error}`);
                                        });
        });
        
    }//obtenerCursos

    buscarCurso(id){
        return new Promise ((resolve,reject)=>{
            fetch(`${RUTA_BASE}/cursos/${id}`)
                                        .then((respuesta) => {
                                            return respuesta.json();
                                        }).then((curso) => {
                                            resolve(curso)
                                        }).catch((error) => {
                                            reject(`Ha ocurrido un error: ${error}`);
                                        });
        });
    }//buscarCurso

    crearCurso(objCurso){
        return new Promise ((resolve,reject) => {
            let configuracion = {
                method:'POST',
                body: JSON.stringify(objCurso),
                headers: {'Content-Type':'application/json'}
            }
            fetch(`${RUTA_BASE}/cursos`,configuracion)
                                                        .then((respuesta)=>{
                                                            return respuesta.json();
                                                        }).then((crearCurso)=>{
                                                            resolve(crearCurso);
                                                        }).catch(error =>{
                                                            reject(`Ha ocurrido un error: ${error}`);
                                                        });
        });
    }

    actualizarCurso(objCurso){
        return new Promise ((resolve,reject) => {
            let configuracion = {
                method:'PUT',
                body: JSON.stringify(objCurso),
                headers: {'Content-Type':'application/json'}
            }
            let {curso_id} = objCurso;
            fetch(`${RUTA_BASE}/cursos/${curso_id}`,configuracion)
                                                        .then((respuesta)=>{
                                                            return respuesta.json();
                                                        }).then((cursoActualizado)=>{
                                                            resolve(cursoActualizado);
                                                        }).catch(error =>{
                                                            reject(`Ha ocurrido un error: ${error}`);
                                                        });
        });
    }
}