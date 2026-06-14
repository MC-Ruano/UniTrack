const express = require("express");

const router = express.Router();

const Curso = require("../models/Curso");
const CursosAVL = require("../services/CursosAVL");

const avl = new CursosAVL();


// INSERTAR
router.post("/", (req, res) => {

    const {
        codigo,
        nombre,
        creditos,
        catedratico,
        horario,
        cupoMaximo
    } = req.body;

    const curso = new Curso(
        codigo,
        nombre,
        creditos,
        catedratico,
        horario,
        cupoMaximo
    );

    avl.insertar(curso);

    res.json({
        mensaje: "Curso agregado al AVL"
    });

});


// INORDEN
router.get("/inorden", (req, res) => {

    res.json(
        avl.inOrden()
    );

});


// ALTURA
router.get("/altura", (req, res) => {

    res.json({
        altura:
            avl.alturaArbol()
    });

});


// BUSCAR
router.get("/:codigo", (req, res) => {

    const curso =
        avl.buscar(
            req.params.codigo
        );

    if (!curso) {

        return res.status(404).json({
            mensaje: "No encontrado"
        });

    }

    res.json(curso);

});

module.exports = router;