const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Usuario = require('../models/usuario.model.js')(sequelize, Sequelize);
db.Mascota = require('../models/mascota.model.js')(sequelize, Sequelize);
db.Habitacion = require('../models/habitacion.model.js')(sequelize, Sequelize);
db.Servicio = require('../models/servicio.model.js')(sequelize, Sequelize);
db.Reservacion = require('../models/reservacion.model.js')(sequelize, Sequelize);
db.Servicio_reservacion = require('../models/servicio_reservacion.model.js')(sequelize, Sequelize);
db.Pago = require('../models/pago.model.js')(sequelize, Sequelize);
db.Promocion = require('../models/promocion.model.js')(sequelize, Sequelize);
db.Log_disponibilidad = require('../models/log_disponibilidad.model.js')(sequelize, Sequelize);
db.Inventario = require('../models/inventario.model.js')(sequelize, Sequelize);
db.Proveedor = require('../models/proveedor.model.js')(sequelize, Sequelize);
db.Precio = require('../models/precio.model.js')(sequelize, Sequelize);

module.exports = db;
