const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('factura', {
    IdFactura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'CodigoCliente'
      }
    },
    Fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    Detalle: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'factura',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdFactura" },
        ]
      },
      {
        name: "Cliente",
        using: "BTREE",
        fields: [
          { name: "Cliente" },
        ]
      },
    ]
  });
};
