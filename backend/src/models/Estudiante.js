class Estudiante {
    constructor(
        carnet,
        nombre,
        apellido,
        correo,
        fechaNacimiento,
        carrera,
        semestreActual
    ) {
        this.carnet = carnet;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.fechaNacimiento = fechaNacimiento;
        this.carrera = carrera;
        this.semestreActual = semestreActual;

        // Historial (Lista Doblemente Enlazada)
        this.historial = null;
    }
}

module.exports = Estudiante;