const express = require("express");

const router = express.Router();

const Curso = require("../models/Curso");
const CursosBST = require("../services/CursosBST");

const arbol = new CursosBST();


// INSERTAR CURSO
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

    arbol.insertar(curso);

    res.json({
        mensaje: "Curso agregado"
    });

});


// INORDEN
router.get("/inorden", (req, res) => {

    res.json(
        arbol.inOrden()
    );

});


// PREORDEN
router.get("/preorden", (req, res) => {

    res.json(
        arbol.preOrden()
    );

});


// POSTORDEN
router.get("/postorden", (req, res) => {

    res.json(
        arbol.postOrden()
    );

});


// MINIMO
router.get("/minimo", (req, res) => {

    res.json(
        arbol.minimo()
    );

});


// MAXIMO
router.get("/maximo", (req, res) => {

    res.json(
        arbol.maximo()
    );

});


// ALTURA
router.get("/altura", (req, res) => {

    res.json({
        altura: arbol.altura()
    });

});


// BUSCAR
router.get("/:codigo", (req, res) => {

    const curso =
        arbol.buscar(req.params.codigo);

    if (!curso) {

        return res.status(404).json({
            mensaje: "No encontrado"
        });

    }

    res.json(curso);

});


// ELIMINAR
router.delete("/:codigo", (req, res) => {

    arbol.eliminar(
        req.params.codigo
    );

    res.json({
        mensaje: "Curso eliminado"
    });

});

module.exports = router;