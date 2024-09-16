let express = require('express');
let router = express.Router();

// Importar controladores
const usuarios = require('../controllers/usuario.controler.js');
const mascotas = require('../controllers/mascota.controler.js');
const habitaciones = require('../controllers/habitacion.controler.js');
const servicios = require('../controllers/servicio.controler.js');
const reservaciones = require('../controllers/reservacion.controller.js');
const serviciosReservacion = require('../controllers/servicio_reservacion.controller.js');
const pagos = require('../controllers/pago.controller.js');
const promociones = require('../controllers/promocion.controller.js');
const logsDisponibilidad = require('../controllers/log_disponibilidad.controller.js');
const inventario = require('../controllers/inventario.controller.js');
const proveedores = require('../controllers/proveedor.controller.js');
const precios = require('../controllers/precio.controller.js');


// Rutas para usuarios
router.post('/api/usuarios/create', usuarios.create);
router.get('/api/usuarios/all', usuarios.retrieveAllUsuarios);
router.get('/api/usuarios/:id', usuarios.getUsuarioById);
router.put('/api/usuarios/update/:id', usuarios.updateById);
router.delete('/api/usuarios/delete/:id', usuarios.deleteById);


// Rutas para mascotas
router.post('/api/mascotas/create', mascotas.create);
router.get('/api/mascotas/all', mascotas.retrieveAllMascotas);
router.get('/api/mascotas/:id', mascotas.getMascotaById);
router.put('/api/mascotas/update/:id', mascotas.updateById);
router.delete('/api/mascotas/delete/:id', mascotas.deleteById);


// Rutas para habitaciones
router.post('/api/habitaciones/create', habitaciones.create);
router.get('/api/habitaciones/all', habitaciones.retrieveAllHabitaciones);
router.get('/api/habitaciones/:id', habitaciones.getHabitacionById);
router.put('/api/habitaciones/update/:id', habitaciones.updateById);
router.delete('/api/habitaciones/delete/:id', habitaciones.deleteById);


// Rutas para servicios
router.post('/api/servicios/create', servicios.create);
router.get('/api/servicios/all', servicios.retrieveAllServicios);
router.get('/api/servicios/:id', servicios.getServicioById);
router.put('/api/servicios/update/:id', servicios.updateById);
router.delete('/api/servicios/delete/:id', servicios.deleteById);


// Rutas para reservaciones
router.post('/api/reservaciones/create', reservaciones.create);
router.get('/api/reservaciones/all', reservaciones.retrieveAllReservaciones);
router.get('/api/reservaciones/:id', reservaciones.getReservacionById);
router.put('/api/reservaciones/update/:id', reservaciones.updateById);
router.delete('/api/reservaciones/delete/:id', reservaciones.deleteById);


// Rutas para servicios_reservacion
router.post('/api/servicios_reservacion/create', serviciosReservacion.create);
router.get('/api/servicios_reservacion/all', serviciosReservacion.retrieveAllServiciosReservacion);
router.get('/api/servicios_reservacion/:id', serviciosReservacion.getServicioReservacionById);
router.put('/api/servicios_reservacion/update/:id', serviciosReservacion.updateById);
router.delete('/api/servicios_reservacion/delete/:id', serviciosReservacion.deleteById);


// Rutas para pagos
router.post('/api/pagos/create', pagos.create);
router.get('/api/pagos/all', pagos.retrieveAllPagos);
router.get('/api/pagos/:id', pagos.getPagoById);
router.put('/api/pagos/update/:id', pagos.updateById);
router.delete('/api/pagos/delete/:id', pagos.deleteById);


// Rutas para promociones
router.post('/api/promociones/create', promociones.create);
router.get('/api/promociones/all', promociones.retrieveAllPromociones);
router.get('/api/promociones/:id', promociones.getPromocionById);
router.put('/api/promociones/update/:id', promociones.updateById);
router.delete('/api/promociones/delete/:id', promociones.deleteById);


// Rutas para logs_disponibilidad
router.post('/api/logs_disponibilidad/create', logsDisponibilidad.create);
router.get('/api/logs_disponibilidad/all', logsDisponibilidad.retrieveAllLogsDisponibilidad);
router.get('/api/logs_disponibilidad/:id', logsDisponibilidad.getLogDisponibilidadById);
router.put('/api/logs_disponibilidad/update/:id', logsDisponibilidad.updateById);
router.delete('/api/logs_disponibilidad/delete/:id', logsDisponibilidad.deleteById);


// Rutas para inventario
router.post('/api/inventario/create', inventario.create);
router.get('/api/inventario/all', inventario.retrieveAllInventario);
router.get('/api/inventario/:id', inventario.getInventarioById);
router.put('/api/inventario/update/:id', inventario.updateById);
router.delete('/api/inventario/delete/:id', inventario.deleteById);


// Rutas para proveedores
router.post('/api/proveedores/create', proveedores.create);
router.get('/api/proveedores/all', proveedores.retrieveAllProveedores);
router.get('/api/proveedores/:id', proveedores.getProveedorById);
router.put('/api/proveedores/update/:id', proveedores.updateById);
router.delete('/api/proveedores/delete/:id', proveedores.deleteById);


router.post('/api/precios/create', precios.create);
router.get('/api/precios/all', precios.retrieveAllPrecios);
router.get('/api/precios/:id', precios.getPrecioById);
router.put('/api/precios/update/:id', precios.updateById);
router.delete('/api/precios/delete/:id', precios.deleteById);

module.exports = router;