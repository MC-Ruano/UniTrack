const NodoInscripcion = require("./NodoInscripcion");

class HistorialInscripcionesDLL {

    constructor() {

        this.head = null;

        this.tail = null;

        this.size = 0;
    }

    insertarAlInicio(inscripcion) {

    const nuevoNodo = new NodoInscripcion(inscripcion);

    if (!this.head) {

        this.head = nuevoNodo;
        this.tail = nuevoNodo;

    } else {

        nuevoNodo.next = this.head;

        this.head.prev = nuevoNodo;

        this.head = nuevoNodo;
    }

    this.size++;
}

    insertarAlFinal(inscripcion) {

    const nuevoNodo = new NodoInscripcion(inscripcion);

    if (!this.tail) {

        this.head = nuevoNodo;
        this.tail = nuevoNodo;

    } else {

        nuevoNodo.prev = this.tail;

        this.tail.next = nuevoNodo;

        this.tail = nuevoNodo;
    }

    this.size++;
}

    eliminarPorCurso(codigoCurso) {

    if (!this.head) {
        return false;
    }

    let actual = this.head;

    while (actual) {

        if (actual.inscripcion.codigoCurso === codigoCurso) {

            // eliminar cabeza
            if (actual === this.head) {

                this.head = actual.next;

                if (this.head) {
                    this.head.prev = null;
                } else {
                    this.tail = null;
                }

            }

            // eliminar cola
                else if (actual === this.tail) {

                this.tail = actual.prev;

                if (this.tail) {
                this.tail.next = null;
                }
            }

            // eliminar intermedio
            else {

                actual.prev.next = actual.next;

                actual.next.prev = actual.prev;
            }

            this.size--;

            return true;
        }

        actual = actual.next;
    }

    return false;
}

    buscarPorCurso(codigoCurso) {

    let actual = this.head;

    while (actual) {

        if (actual.inscripcion.codigoCurso === codigoCurso) {
            return actual.inscripcion;
        }

        actual = actual.next;
    }

    return null;
}

    buscarPorSemestre(semestre) {

    const resultados = [];

    let actual = this.head;

    while (actual) {

        if (actual.inscripcion.semestre === semestre) {
            resultados.push(actual.inscripcion);
        }

        actual = actual.next;
    }

    return resultados;
}

    mostrarNormal() {

    const historial = [];

    let actual = this.head;

    while (actual) {

        historial.push(actual.inscripcion);

        actual = actual.next;
    }

    return historial;
}

    mostrarInverso() {

    const historial = [];

    let actual = this.tail;

    while (actual) {

        historial.push(actual.inscripcion);

        actual = actual.prev;
    }

    return historial;
}

    ordenarPorNota() {

    if (!this.head || !this.head.next) {
        return;
    }

    let cambiado;

    do {

        cambiado = false;

        let actual = this.head;

        while (actual.next) {

            if (actual.inscripcion.nota > actual.next.inscripcion.nota) {

                const temp = actual.inscripcion;

                actual.inscripcion = actual.next.inscripcion;

                actual.next.inscripcion = temp;

                cambiado = true;
            }

            actual = actual.next;
        }

    } while (cambiado);

}

}

module.exports = HistorialInscripcionesDLL;