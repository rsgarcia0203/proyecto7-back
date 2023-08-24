const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordendetalle', {
    IdOrdenDetalle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LineaOrden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FormaPago: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NumeroTransaccion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Monto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    Saldo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    Comentario: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Banco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Aplicado: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IdOrden: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orden',
        key: 'IdOrden'
      }
    },
    CodigoProducto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'producto',
        key: 'CodigoProducto'
      }
    }
  }, {
    sequelize,
    tableName: 'ordendetalle',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdOrdenDetalle" },
        ]
      },
      {
        name: "IdOrden",
        using: "BTREE",
        fields: [
          { name: "IdOrden" },
        ]
      },
      {
        name: "CodigoProducto",
        using: "BTREE",
        fields: [
          { name: "CodigoProducto" },
        ]
      },
    ]
  });
};
