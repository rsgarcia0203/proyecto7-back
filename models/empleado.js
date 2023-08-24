const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empleado', {
    CodigoEmpleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Nombres: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Apellidos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Orden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Cargo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cedula: {
      type: DataTypes.STRING(20),
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
    FechaCreacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    FechaActualizacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    FechaSalida: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empleado',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CodigoEmpleado" },
        ]
      },
    ]
  });
};
