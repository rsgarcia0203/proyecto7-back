const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedor', {
    CodigoProveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Celular: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Correo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Direccion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RUC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RazonSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TipoRUC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FechaCreacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    FechaActualizacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'proveedor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CodigoProveedor" },
        ]
      },
    ]
  });
};
