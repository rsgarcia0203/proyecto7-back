const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingrediente', {
    CodigoIngrediente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Proveedor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoProveedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CodigoProducto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FechaCreacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ingrediente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CodigoIngrediente" },
        ]
      },
    ]
  });
};
