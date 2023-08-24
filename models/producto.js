const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    CodigoProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CodigoCategoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    Costo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Imagen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CodigoProducto" },
        ]
      },
    ]
  });
};
