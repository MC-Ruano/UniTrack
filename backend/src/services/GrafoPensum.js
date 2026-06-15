class GrafoPensum {

    constructor() {

        this.listaAdyacencia = {};

    }

    agregarCurso(codigo) {

    if (!this.listaAdyacencia[codigo]) {

        this.listaAdyacencia[codigo] = [];

    }

}

agregarPrerequisito(
    origen,
    destino
) {

    if (
        this.listaAdyacencia[origen]
        &&
        this.listaAdyacencia[destino]
    ) {

        this.listaAdyacencia[origen]
            .push(destino);

    }

}

listar() {

    return this.listaAdyacencia;

}

eliminarCurso(codigo) {

    if (
        !this.listaAdyacencia[codigo]
    ) {

        return false;

    }

    delete this.listaAdyacencia[codigo];

    for (
        const curso
        in this.listaAdyacencia
    ) {

        this.listaAdyacencia[curso] =
            this.listaAdyacencia[curso]
            .filter(
                destino =>
                destino !== codigo
            );

    }

    return true;

}

eliminarPrerequisito(
    origen,
    destino
) {

    if (
        !this.listaAdyacencia[origen]
    ) {

        return false;

    }

    this.listaAdyacencia[origen] =
        this.listaAdyacencia[origen]
        .filter(
            curso =>
            curso !== destino
        );

    return true;

}

bfs(inicio) {

    if (!this.listaAdyacencia[inicio]) {

        return [];

    }

    const visitados = new Set();

    const cola = [];

    const resultado = [];

    visitados.add(inicio);

    cola.push(inicio);

    while (cola.length > 0) {

        const actual = cola.shift();

        resultado.push(actual);

        for (const vecino of this.listaAdyacencia[actual]) {

            if (!visitados.has(vecino)) {

                visitados.add(vecino);

                cola.push(vecino);

            }

        }

    }

    return resultado;

}

dfs(inicio) {

    const resultado = [];

    const visitados = new Set();

    this.dfsRecursivo(
        inicio,
        visitados,
        resultado
    );

    return resultado;

}

dfsRecursivo(
    actual,
    visitados,
    resultado
) {

    if (
        !this.listaAdyacencia[actual]
    ) {

        return;

    }

    visitados.add(actual);

    resultado.push(actual);

    for (
        const vecino
        of this.listaAdyacencia[actual]
    ) {

        if (
            !visitados.has(vecino)
        ) {

            this.dfsRecursivo(
                vecino,
                visitados,
                resultado
            );

        }

    }

}

tieneCiclos() {

    const visitados = new Set();

    const enRecorrido = new Set();

    for (const curso in this.listaAdyacencia) {

        if (

            this.detectarCiclo(
                curso,
                visitados,
                enRecorrido
            )

        ) {

            return true;

        }

    }

    return false;

}

detectarCiclo(
    curso,
    visitados,
    enRecorrido
) {

    if (
        enRecorrido.has(curso)
    ) {

        return true;

    }

    if (
        visitados.has(curso)
    ) {

        return false;

    }

    visitados.add(curso);

    enRecorrido.add(curso);

    for (
        const vecino
        of this.listaAdyacencia[curso]
    ) {

        if (

            this.detectarCiclo(
                vecino,
                visitados,
                enRecorrido
            )

        ) {

            return true;

        }

    }

    enRecorrido.delete(curso);

    return false;

}

ordenTopologico() {

    const visitados = new Set();

    const pila = [];

    for (
        const curso
        in this.listaAdyacencia
    ) {

        if (
            !visitados.has(curso)
        ) {

            this.topologicoDFS(
                curso,
                visitados,
                pila
            );

        }

    }

    return pila.reverse();

}

topologicoDFS(
    curso,
    visitados,
    pila
) {

    visitados.add(curso);

    for (
        const vecino
        of this.listaAdyacencia[curso]
    ) {

        if (
            !visitados.has(vecino)
        ) {

            this.topologicoDFS(
                vecino,
                visitados,
                pila
            );

        }

    }

    pila.push(curso);

}

caminoMasCorto(inicio, destino) {

    if (
        !this.listaAdyacencia[inicio]
        ||
        !this.listaAdyacencia[destino]
    ) {

        return [];

    }

    const cola = [[inicio]];

    const visitados = new Set();

    visitados.add(inicio);

    while (cola.length > 0) {

        const camino = cola.shift();

        const actual =
            camino[camino.length - 1];

        if (actual === destino) {

            return camino;

        }

        for (
            const vecino
            of this.listaAdyacencia[actual]
        ) {

            if (
                !visitados.has(vecino)
            ) {

                visitados.add(vecino);

                cola.push([
                    ...camino,
                    vecino
                ]);

            }

        }

    }

    return [];

}

obtenerPrerequisitos(curso) {

    const resultado = [];

    const visitados = new Set();

    this.buscarPrerequisitos(
        curso,
        visitados,
        resultado
    );

    return resultado;

}

buscarPrerequisitos(
    curso,
    visitados,
    resultado
) {

    for (
        const origen
        in this.listaAdyacencia
    ) {

        if (

            this.listaAdyacencia[origen]
            .includes(curso)

        ) {

            if (
                !visitados.has(origen)
            ) {

                visitados.add(origen);

                resultado.push(origen);

                this.buscarPrerequisitos(
                    origen,
                    visitados,
                    resultado
                );

            }

        }

    }

}

}

module.exports = GrafoPensum;