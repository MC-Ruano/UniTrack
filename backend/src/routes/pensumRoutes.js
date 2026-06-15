const express = require("express");

const router = express.Router();

const GrafoPensum =
    require("../services/GrafoPensum");

const grafo = new GrafoPensum();


// LISTAR
router.get("/", (req, res) => {

    res.json(
        grafo.listar()
    );

});


// AGREGAR CURSO
router.post("/curso", (req, res) => {

    const { codigo } = req.body;

    grafo.agregarCurso(codigo);

    res.json({
        mensaje: "Curso agregado"
    });

});


// AGREGAR PRERREQUISITO
router.post("/prerrequisito", (req, res) => {

    const {
        origen,
        destino
    } = req.body;

    grafo.agregarPrerequisito(
        origen,
        destino
    );

    res.json({
        mensaje: "Prerrequisito agregado"
    });

});


// BFS
router.get("/bfs/:inicio", (req, res) => {

    res.json(
        grafo.bfs(
            req.params.inicio
        )
    );

});


// DFS
router.get("/dfs/:inicio", (req, res) => {

    res.json(
        grafo.dfs(
            req.params.inicio
        )
    );

});


// CICLOS
router.get("/ciclos", (req, res) => {

    res.json({
        tieneCiclos:
            grafo.tieneCiclos()
    });

});


// TOPOLOGICO
router.get("/topologico", (req, res) => {

    res.json(
        grafo.ordenTopologico()
    );

});

module.exports = router;