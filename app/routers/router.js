let express = require('express');
let router = express.Router();

// Importar controladores
const customers = require('../controllers/controller.js'); 
const products = require('../controllers/product.controler.js'); 
const orders = require('../controllers/order.controler.js'); 
const suppliers = require('../controllers/supplier.controler.js'); 
const songs = require('../controllers/song.controler.js');
const libros = require('../controllers/libro.controler.js');

// Rutas para customers
router.post('/api/customers/create', customers.create);
router.get('/api/customers/all', customers.retrieveAllCustomers);
router.get('/api/customers/onebyid/:id', customers.getCustomerById);
router.get('/api/customers/filteringbyage', customers.filteringByAge);
router.get('/api/customers/pagination', customers.pagination);
router.get('/api/customers/pagefiltersort', customers.pagingfilteringsorting);
router.put('/api/customers/update/:id', customers.updateById);
router.delete('/api/customers/delete/:id', customers.deleteById);

// Rutas para products
router.post('/api/products/create', products.create);
router.get('/api/products/all', products.retrieveAllProducts);
router.get('/api/products/onebyid/:id', products.getProductById);
router.put('/api/products/update/:id', products.updateById);
router.delete('/api/products/delete/:id', products.deleteById);

// Rutas para orders
router.post('/api/orders/create', orders.create);
router.get('/api/orders/all', orders.retrieveAllOrders);
router.get('/api/orders/onebyid/:id', orders.getOrderById);
router.put('/api/orders/update/:id', orders.updateById);
router.delete('/api/orders/delete/:id', orders.deleteById);

// Rutas para songs
router.post('/api/songs/create', songs.create);
router.get('/api/songs/all', songs.retrieveAllSongs);
router.get('/api/songs/onebyid/:id', songs.getSongById);
router.put('/api/songs/update/:id', songs.updateById);
router.delete('/api/songs/delete/:id', songs.deleteById);

// Rutas para libros
router.post('/api/libros/create', libros.create);
router.get('/api/libros/all', libros.retrieveAllLibros);
router.get('/api/libros/onebyid/:id', libros.getLibroById);
router.put('/api/libros/update/:id', libros.updateById);
router.delete('/api/libros/delete/:id', libros.deleteById);

module.exports = router;