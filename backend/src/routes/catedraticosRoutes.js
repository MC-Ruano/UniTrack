const express = require("express");

const router = express.Router();

const Catedratico = require("../models/Catedratico");
const HashTable = require("../services/HashTable");

const tabla = new HashTable();


// LISTAR
router.get("/", (req, res) => {

    res.json(
        tabla.listar()
    );

});


// FACTOR DE CARGA
router.get("/factor-carga", (req, res) => {

    res.json({
        factorCarga:
            tabla.factorCarga()
    });

});


// INSERTAR
router.post("/", (req, res) => {

    const {
        codigo,
        nombre,
        apellido,
        especialidad,
        correo
    } = req.body;

    const catedratico =
        new Catedratico(
            codigo,
            nombre,
            apellido,
            especialidad,
            correo
        );

    tabla.insertar(
        catedratico
    );

    res.json({
        mensaje:
            "Catedrático agregado"
    });

});


// BUSCAR
router.get("/:codigo", (req, res) => {

    const encontrado =
        tabla.buscar(
            req.params.codigo
        );

    if (!encontrado) {

        return res.status(404).json({
            mensaje:
                "No encontrado"
        });

    }

    res.json(encontrado);

});


// ELIMINAR
router.delete("/:codigo", (req, res) => {

    const eliminado =
        tabla.eliminar(
            req.params.codigo
        );

    if (!eliminado) {

        return res.status(404).json({
            mensaje:
                "No encontrado"
        });

    }

    res.json({
        mensaje:
            "Catedrático eliminado"
    });

});

module.exports = router;