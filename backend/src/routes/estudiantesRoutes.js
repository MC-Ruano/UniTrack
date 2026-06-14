const express = require("express");

const router = express.Router();

const Estudiante = require("../models/Estudiante");
const EstudiantesLinkedList = require("../services/EstudiantesLinkedList");

const listaEstudiantes = new EstudiantesLinkedList();


// LISTAR TODOS
router.get("/", (req, res) => {

    res.json(listaEstudiantes.listarTodos());

});


// CREAR AL FINAL
router.post("/", (req, res) => {

    const {
        carnet,
        nombre,
        apellido,
        correo,
        fechaNacimiento,
        carrera,
        semestreActual
    } = req.body;

    const estudiante = new Estudiante(
        carnet,
        nombre,
        apellido,
        correo,
        fechaNacimiento,
        carrera,
        semestreActual
    );

    listaEstudiantes.insertarAlFinal(estudiante);

    res.json({
        mensaje: "Estudiante agregado"
    });

});


// TAMAÑO DE LA LISTA
router.get("/tamano/lista", (req, res) => {

    res.json({
        tamano: listaEstudiantes.obtenerTamano()
    });

});

// INVERTIR LISTA
router.put("/invertir/lista", (req, res) => {

    listaEstudiantes.invertir();

    res.json({
        mensaje: "Lista invertida correctamente"
    });

});

// INSERTAR AL INICIO
router.post("/inicio", (req, res) => {

    const {
        carnet,
        nombre,
        apellido,
        correo,
        fechaNacimiento,
        carrera,
        semestreActual
    } = req.body;

    const estudiante = new Estudiante(
        carnet,
        nombre,
        apellido,
        correo,
        fechaNacimiento,
        carrera,
        semestreActual
    );

    listaEstudiantes.insertarAlInicio(estudiante);

    res.json({
        mensaje: "Estudiante agregado al inicio"
    });

});

// INSERTAR EN POSICION
router.post("/posicion/:indice", (req, res) => {

    const indice = parseInt(req.params.indice);

    const {
        carnet,
        nombre,
        apellido,
        correo,
        fechaNacimiento,
        carrera,
        semestreActual
    } = req.body;

    const estudiante = new Estudiante(
        carnet,
        nombre,
        apellido,
        correo,
        fechaNacimiento,
        carrera,
        semestreActual
    );

    const insertado =
        listaEstudiantes.insertarEnPosicion(estudiante, indice);

    if (!insertado) {

        return res.status(400).json({
            mensaje: "Posición inválida"
        });

    }

    res.json({
        mensaje: "Estudiante agregado en posición específica"
    });

});

// BUSCAR
router.get("/:carnet", (req, res) => {

    const estudiante =
        listaEstudiantes.buscarPorCarnet(req.params.carnet);

    if (!estudiante) {

        return res.status(404).json({
            mensaje: "No encontrado"
        });

    }

    res.json(estudiante);

});


// ELIMINAR
router.delete("/:carnet", (req, res) => {

    const eliminado =
        listaEstudiantes.eliminarPorCarnet(req.params.carnet);

    if (!eliminado) {

        return res.status(404).json({
            mensaje: "No encontrado"
        });

    }

    res.json({
        mensaje: "Estudiante eliminado"
    });

});

module.exports = router;