const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mesa', {
    NumeroMesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Capacidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Ubicacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mesa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NumeroMesa" },
        ]
      },
    ]
  });
};
