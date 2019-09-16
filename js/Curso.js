class Curso{
    curso_id = 0;
    curso_nom = "";
    curso_desc = "";
    curso_anio = 0;
    curso_docente = "";
    curso_alumnos = [];

    constructor(c_nombre,c_desc,c_anio,c_docente){
        
        this.curso_nom = c_nombre;
        this.curso_desc = c_desc;
        this.curso_anio = c_anio;
        this.curso_docente = c_docente;
    }

    anadirAlumnos(idAlumno){
        this.curso_alumnos.push(idAlumno);
    }
    removerAlumnos(idAlumno){
        for(let i = 0;i < this.curso_alumnos.length; i++){
            if(idAlumno == this.curso_alumnos[i]){
                this.curso_alumnos.splice(i,1);
            }
        }
    }
}