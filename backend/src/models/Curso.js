class Curso {

    constructor(
        codigo,
        nombre,
        creditos,
        catedratico,
        horario,
        cupoMaximo
    ) {

        this.codigo = codigo;
        this.nombre = nombre;
        this.creditos = creditos;
        this.catedratico = catedratico;
        this.horario = horario;
        this.cupoMaximo = cupoMaximo;

    }

}

module.exports = Curso;