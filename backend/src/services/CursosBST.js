const NodoCurso = require("./NodoCurso");

class CursosBST {

    constructor() {

        this.root = null;

    }

    insertar(curso) {

        const nuevoNodo = new NodoCurso(curso);

        if (!this.root) {

            this.root = nuevoNodo;

            return;
        }

        this.insertarNodo(this.root, nuevoNodo);
    }

    insertarNodo(actual, nuevoNodo) {

        if (nuevoNodo.curso.codigo < actual.curso.codigo) {

            if (!actual.left) {

                actual.left = nuevoNodo;

            } else {

                this.insertarNodo(actual.left, nuevoNodo);

            }

        } else {

            if (!actual.right) {

                actual.right = nuevoNodo;

            } else {

                this.insertarNodo(actual.right, nuevoNodo);

            }

        }

    }

    buscar(codigo) {

    return this.buscarNodo(this.root, codigo);

}

buscarNodo(actual, codigo) {

    if (!actual) {

        return null;

    }

    if (codigo === actual.curso.codigo) {

        return actual.curso;

    }

    if (codigo < actual.curso.codigo) {

        return this.buscarNodo(
            actual.left,
            codigo
        );

    }

    return this.buscarNodo(
        actual.right,
        codigo
    );

}

inOrden() {

    const resultado = [];

    this.recorrerInOrden(
        this.root,
        resultado
    );

    return resultado;

}

recorrerInOrden(actual, resultado) {

    if (!actual) {
        return;
    }

    this.recorrerInOrden(
        actual.left,
        resultado
    );

    resultado.push(actual.curso);

    this.recorrerInOrden(
        actual.right,
        resultado
    );

}

preOrden() {

    const resultado = [];

    this.recorrerPreOrden(
        this.root,
        resultado
    );

    return resultado;

}

recorrerPreOrden(actual, resultado) {

    if (!actual) {
        return;
    }

    resultado.push(actual.curso);

    this.recorrerPreOrden(
        actual.left,
        resultado
    );

    this.recorrerPreOrden(
        actual.right,
        resultado
    );

}

postOrden() {

    const resultado = [];

    this.recorrerPostOrden(
        this.root,
        resultado
    );

    return resultado;

}

recorrerPostOrden(actual, resultado) {

    if (!actual) {
        return;
    }

    this.recorrerPostOrden(
        actual.left,
        resultado
    );

    this.recorrerPostOrden(
        actual.right,
        resultado
    );

    resultado.push(actual.curso);

}

minimo() {

    if (!this.root) {
        return null;
    }

    let actual = this.root;

    while (actual.left) {
        actual = actual.left;
    }

    return actual.curso;

}

maximo() {

    if (!this.root) {
        return null;
    }

    let actual = this.root;

    while (actual.right) {
        actual = actual.right;
    }

    return actual.curso;

}

altura() {

    return this.calcularAltura(this.root);

}

calcularAltura(nodo) {

    if (!nodo) {
        return -1;
    }

    const izquierda =
        this.calcularAltura(nodo.left);

    const derecha =
        this.calcularAltura(nodo.right);

    return Math.max(
        izquierda,
        derecha
    ) + 1;

}

eliminar(codigo) {

    this.root = this.eliminarNodo(
        this.root,
        codigo
    );

}

eliminarNodo(actual, codigo) {

    if (!actual) {
        return null;
    }

    if (codigo < actual.curso.codigo) {

        actual.left = this.eliminarNodo(
            actual.left,
            codigo
        );

        return actual;
    }

    if (codigo > actual.curso.codigo) {

        actual.right = this.eliminarNodo(
            actual.right,
            codigo
        );

        return actual;
    }

    // Sin hijos
    if (!actual.left && !actual.right) {
        return null;
    }

    // Un hijo derecho
    if (!actual.left) {
        return actual.right;
    }

    // Un hijo izquierdo
    if (!actual.right) {
        return actual.left;
    }

    // Dos hijos
    let sucesor = actual.right;

    while (sucesor.left) {
        sucesor = sucesor.left;
    }

    actual.curso = sucesor.curso;

    actual.right = this.eliminarNodo(
        actual.right,
        sucesor.curso.codigo
    );

    return actual;
}

}

module.exports = CursosBST;