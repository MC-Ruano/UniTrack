const NodoCurso = require("./NodoCurso");

class CursosAVL {

    constructor() {

        this.root = null;

    }

    altura(nodo) {

        if (!nodo) {
            return 0;
        }

        return nodo.altura;
    }

    obtenerBalance(nodo) {

        if (!nodo) {
            return 0;
        }

        return this.altura(nodo.left)
            - this.altura(nodo.right);
    }

    rotarDerecha(y) {

    const x = y.left;

    const T2 = x.right;

    x.right = y;

    y.left = T2;

    y.altura = Math.max(
        this.altura(y.left),
        this.altura(y.right)
    ) + 1;

    x.altura = Math.max(
        this.altura(x.left),
        this.altura(x.right)
    ) + 1;

    return x;

}

rotarIzquierda(x) {

    const y = x.right;

    const T2 = y.left;

    y.left = x;

    x.right = T2;

    x.altura = Math.max(
        this.altura(x.left),
        this.altura(x.right)
    ) + 1;

    y.altura = Math.max(
        this.altura(y.left),
        this.altura(y.right)
    ) + 1;

    return y;

}

insertar(curso) {

    this.root = this.insertarNodo(
        this.root,
        curso
    );

}

insertarNodo(nodo, curso) {

    if (!nodo) {

        return new NodoCurso(curso);

    }

    if (curso.codigo < nodo.curso.codigo) {

        nodo.left = this.insertarNodo(
            nodo.left,
            curso
        );

    }

    else if (curso.codigo > nodo.curso.codigo) {

        nodo.right = this.insertarNodo(
            nodo.right,
            curso
        );

    }

    else {

        return nodo;

    }

    nodo.altura =
        1 + Math.max(
            this.altura(nodo.left),
            this.altura(nodo.right)
        );

    const balance =
        this.obtenerBalance(nodo);

    // LL
    if (
        balance > 1 &&
        curso.codigo < nodo.left.curso.codigo
    ) {

        return this.rotarDerecha(nodo);

    }

    // RR
    if (
        balance < -1 &&
        curso.codigo > nodo.right.curso.codigo
    ) {

        return this.rotarIzquierda(nodo);

    }

    // LR
    if (
        balance > 1 &&
        curso.codigo > nodo.left.curso.codigo
    ) {

        nodo.left =
            this.rotarIzquierda(
                nodo.left
            );

        return this.rotarDerecha(nodo);

    }

    // RL
    if (
        balance < -1 &&
        curso.codigo < nodo.right.curso.codigo
    ) {

        nodo.right =
            this.rotarDerecha(
                nodo.right
            );

        return this.rotarIzquierda(nodo);

    }

    return nodo;

}

buscar(codigo) {

    return this.buscarNodo(
        this.root,
        codigo
    );

}

buscarNodo(nodo, codigo) {

    if (!nodo) {
        return null;
    }

    if (codigo === nodo.curso.codigo) {
        return nodo.curso;
    }

    if (codigo < nodo.curso.codigo) {

        return this.buscarNodo(
            nodo.left,
            codigo
        );

    }

    return this.buscarNodo(
        nodo.right,
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

recorrerInOrden(nodo, resultado) {

    if (!nodo) {
        return;
    }

    this.recorrerInOrden(
        nodo.left,
        resultado
    );

    resultado.push({
        curso: nodo.curso,
        balance:
            this.obtenerBalance(nodo)
    });

    this.recorrerInOrden(
        nodo.right,
        resultado
    );

}

alturaArbol() {

    return this.altura(
        this.root
    );

}

}

module.exports = CursosAVL;