class HashTableLinear {

    constructor() {

        this.capacidad = 10;

        this.tabla = new Array(
            this.capacidad
        ).fill(null);

    }

    hashDivision(clave) {

        let suma = 0;

        for (let i = 0; i < clave.length; i++) {

            suma += clave.charCodeAt(i);

        }

        return suma % this.capacidad;

    }

    insertar(catedratico) {

        let indice =
            this.hashDivision(
                catedratico.codigo
            );

        while (
            this.tabla[indice] !== null
        ) {

            indice =
                (indice + 1)
                % this.capacidad;

        }

        this.tabla[indice] =
            catedratico;

    }

    buscar(codigo) {

        let indice =
            this.hashDivision(
                codigo
            );

        let inicio = indice;

        while (
            this.tabla[indice] !== null
        ) {

            if (
                this.tabla[indice].codigo
                === codigo
            ) {

                return this.tabla[indice];

            }

            indice =
                (indice + 1)
                % this.capacidad;

            if (indice === inicio) {
                break;
            }

        }

        return null;

    }

    eliminar(codigo) {

        let indice =
            this.hashDivision(
                codigo
            );

        let inicio = indice;

        while (
            this.tabla[indice] !== null
        ) {

            if (
                this.tabla[indice].codigo
                === codigo
            ) {

                this.tabla[indice] =
                    null;

                return true;

            }

            indice =
                (indice + 1)
                % this.capacidad;

            if (indice === inicio) {
                break;
            }

        }

        return false;

    }

}
module.exports = HashTableLinear;