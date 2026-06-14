class HashTable {

    constructor() {

        this.capacidad = 10;
        this.tipoHash = "division";

        this.tabla = Array.from(
    { length: this.capacidad },
    () => []
    );

    }

    hashDivision(clave) {

    let suma = 0;

    for (let i = 0; i < clave.length; i++) {

        suma += clave.charCodeAt(i);

    }

    return suma % this.capacidad;

}

hashDJB2(clave) {

    let hash = 5381;

    for (let i = 0; i < clave.length; i++) {

        hash =
            ((hash << 5) + hash)
            + clave.charCodeAt(i);

    }

    return Math.abs(
        hash % this.capacidad
    );

}

obtenerIndice(clave) {

    if (this.tipoHash === "djb2") {

        return this.hashDJB2(clave);

    }

    return this.hashDivision(clave);

}

insertar(catedratico) {

    const indice =
    this.obtenerIndice(
        catedratico.codigo
    );

    this.tabla[indice].push(
        catedratico
    );

    if (this.factorCarga() > 0.75) {

    this.rehashing();

}

}

buscar(codigo) {

    const indice =
        this.obtenerIndice(
            codigo
        );

    const bucket =
        this.tabla[indice];

    for (let i = 0; i < bucket.length; i++) {

        if (
            bucket[i].codigo === codigo
        ) {

            return bucket[i];

        }

    }

    return null;

}

eliminar(codigo) {

    const indice =
        this.obtenerIndice(
            codigo
        );

    const bucket =
        this.tabla[indice];

    for (let i = 0; i < bucket.length; i++) {

        if (
            bucket[i].codigo === codigo
        ) {

            bucket.splice(i, 1);

            return true;

        }

    }

    return false;

}

listar() {

    return this.tabla;

}

factorCarga() {

    let ocupados = 0;

    for (let i = 0; i < this.capacidad; i++) {

        ocupados +=
            this.tabla[i].length;

    }

    return ocupados / this.capacidad;

}

rehashing() {

    const elementos = [];

    for (let i = 0; i < this.capacidad; i++) {

        for (let j = 0; j < this.tabla[i].length; j++) {

            elementos.push(
                this.tabla[i][j]
            );

        }

    }

    this.capacidad =
        this.capacidad * 2;

    this.tabla = Array.from(
        { length: this.capacidad },
        () => []
    );

    for (let i = 0; i < elementos.length; i++) {

        this.insertar(
            elementos[i]
        );

    }

}

}

module.exports = HashTable;