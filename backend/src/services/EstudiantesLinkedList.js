const NodoEstudiante = require("./NodoEstudiante");

class EstudiantesLinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertarAlInicio(estudiante) {

    const nuevoNodo = new NodoEstudiante(estudiante);

    nuevoNodo.next = this.head;

    this.head = nuevoNodo;

    this.size++;
    }

    insertarAlFinal(estudiante) {

    const nuevoNodo = new NodoEstudiante(estudiante);

    if (!this.head) {
        this.head = nuevoNodo;
        this.size++;
        return;
    }

    let actual = this.head;

    while (actual.next) {
        actual = actual.next;
    }

    actual.next = nuevoNodo;

    this.size++;
    }

    insertarEnPosicion(estudiante, posicion) {

    if (posicion < 0 || posicion > this.size) {
        return false;
    }

    if (posicion === 0) {
        this.insertarAlInicio(estudiante);
        return true;
    }

    const nuevoNodo = new NodoEstudiante(estudiante);

    let actual = this.head;
    let anterior = null;
    let indice = 0;

    while (indice < posicion) {
        anterior = actual;
        actual = actual.next;
        indice++;
    }

    anterior.next = nuevoNodo;
    nuevoNodo.next = actual;

    this.size++;

    return true;
}

    buscarPorCarnet(carnet) {

    let actual = this.head;

    while (actual) {

        if (actual.estudiante.carnet === carnet) {
            return actual.estudiante;
        }

        actual = actual.next;
    }

    return null;
}

   eliminarPorCarnet(carnet) {

    if (!this.head) {
        return false;
    }

    if (this.head.estudiante.carnet === carnet) {
        this.head = this.head.next;
        this.size--;
        return true;
    }

    let actual = this.head;

    while (actual.next) {

        if (actual.next.estudiante.carnet === carnet) {

            actual.next = actual.next.next;

            this.size--;

            return true;
        }

        actual = actual.next;
    }

    return false;
}

    listarTodos() {

    const estudiantes = [];

    let actual = this.head;

    while (actual) {

        estudiantes.push(actual.estudiante);

        actual = actual.next;
    }

    return estudiantes;
}
    obtenerTamano() {
        return this.size;
    }

invertir() {

    let anterior = null;
    let actual = this.head;
    let siguiente = null;

    while (actual) {

        siguiente = actual.next;

        actual.next = anterior;

        anterior = actual;

        actual = siguiente;
    }

    this.head = anterior;
}

}

module.exports = EstudiantesLinkedList;