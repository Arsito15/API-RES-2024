const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./app/config/db.config.js');
const cors = require('cors');

// Configuración de CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Sincronización de la base de datos
db.sequelize.sync({force: false}).then(() => {
  console.log('Resync without dropping tables');
});

// Configuración de body-parser para JSON
app.use(bodyParser.json());

// Definición de rutas
let router = require('./app/routers/router.js');
app.use('/', router);
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});

// Creación del servidor
const PORT = process.env.PORT || 3100;
const server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

// Manejo de errores del servidor
server.on('error', (err) => {
  console.error('Error starting the server:', err);
});
