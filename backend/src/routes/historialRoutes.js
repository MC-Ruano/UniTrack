const express = require("express");

const router = express.Router();

const Inscripcion = require("../models/Inscripcion");
const HistorialInscripcionesDLL = require("../services/HistorialInscripcionesDLL");

const historial = new HistorialInscripcionesDLL();


// LISTAR NORMAL
router.get("/", (req, res) => {

    res.json(historial.mostrarNormal());

});


// LISTAR INVERSO
router.get("/inverso", (req, res) => {

    res.json(historial.mostrarInverso());

});


// AGREGAR AL FINAL
router.post("/", (req, res) => {

    const {
        codigoCurso,
        nombreCurso,
        semestre,
        nota
    } = req.body;

    const inscripcion = new Inscripcion(
        codigoCurso,
        nombreCurso,
        semestre,
        nota
    );

    historial.insertarAlFinal(inscripcion);

    res.json({
        mensaje: "Inscripción agregada"
    });

});

module.exports = router;