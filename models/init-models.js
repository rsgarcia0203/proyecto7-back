var DataTypes = require("sequelize").DataTypes;
var _categoriamenu = require("./categoriamenu");
var _cliente = require("./cliente");
var _empleado = require("./empleado");
var _factura = require("./factura");
var _ingrediente = require("./ingrediente");
var _mesa = require("./mesa");
var _mesareserva = require("./mesareserva");
var _orden = require("./orden");
var _ordendetalle = require("./ordendetalle");
var _producto = require("./producto");
var _proveedor = require("./proveedor");
var _valoraciones = require("./valoraciones");

function initModels(sequelize) {
  var categoriamenu = _categoriamenu(sequelize, DataTypes);
  var cliente = _cliente(sequelize, DataTypes);
  var empleado = _empleado(sequelize, DataTypes);
  var factura = _factura(sequelize, DataTypes);
  var ingrediente = _ingrediente(sequelize, DataTypes);
  var mesa = _mesa(sequelize, DataTypes);
  var mesareserva = _mesareserva(sequelize, DataTypes);
  var orden = _orden(sequelize, DataTypes);
  var ordendetalle = _ordendetalle(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);
  var proveedor = _proveedor(sequelize, DataTypes);
  var valoraciones = _valoraciones(sequelize, DataTypes);

  factura.belongsTo(cliente, { as: "Cliente_cliente", foreignKey: "Cliente"});
  cliente.hasMany(factura, { as: "facturas", foreignKey: "Cliente"});
  orden.belongsTo(cliente, { as: "CodigoCliente_cliente", foreignKey: "CodigoCliente"});
  cliente.hasMany(orden, { as: "ordens", foreignKey: "CodigoCliente"});
  valoraciones.belongsTo(cliente, { as: "Cliente_cliente", foreignKey: "Cliente"});
  cliente.hasMany(valoraciones, { as: "valoraciones", foreignKey: "Cliente"});
  mesareserva.belongsTo(mesa, { as: "NumeroMesa_mesa", foreignKey: "NumeroMesa"});
  mesa.hasMany(mesareserva, { as: "mesareservas", foreignKey: "NumeroMesa"});
  ordendetalle.belongsTo(orden, { as: "IdOrden_orden", foreignKey: "IdOrden"});
  orden.hasMany(ordendetalle, { as: "ordendetalles", foreignKey: "IdOrden"});
  ordendetalle.belongsTo(producto, { as: "CodigoProducto_producto", foreignKey: "CodigoProducto"});
  producto.hasMany(ordendetalle, { as: "ordendetalles", foreignKey: "CodigoProducto"});

  return {
    categoriamenu,
    cliente,
    empleado,
    factura,
    ingrediente,
    mesa,
    mesareserva,
    orden,
    ordendetalle,
    producto,
    proveedor,
    valoraciones,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
