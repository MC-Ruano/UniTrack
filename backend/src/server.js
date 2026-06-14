const avlRoutes = require("./routes/avlRoutes");
const cursosRoutes = require("./routes/cursosRoutes");
const historialRoutes = require("./routes/historialRoutes");
const express = require("express");
const cors = require("cors");

const estudiantesRoutes = require("./routes/estudiantesRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensaje: "UniTrack Backend funcionando correctamente"
    });
});

// RUTAS
app.use("/api/estudiantes", estudiantesRoutes);
app.use("/api/historial", historialRoutes);
app.use("/api/cursos", cursosRoutes);
app.use("/api/avl", avlRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});