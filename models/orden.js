const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orden', {
    IdOrden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Recibo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Inicio: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Fin: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'CodigoCliente'
      }
    }
  }, {
    sequelize,
    tableName: 'orden',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdOrden" },
        ]
      },
      {
        name: "CodigoCliente",
        using: "BTREE",
        fields: [
          { name: "CodigoCliente" },
        ]
      },
    ]
  });
};
