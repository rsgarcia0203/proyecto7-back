const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    CodigoCliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombres: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Apellidos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cedula: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    FechaCreacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Direccion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Telefono: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Correo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Latitud: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true
    },
    Longitud: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true
    },
    FechaUltimaCompra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CodigoCliente" },
        ]
      },
    ]
  });
};
