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

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});