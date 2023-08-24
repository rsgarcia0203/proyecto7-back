const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mesareserva', {
    IdReserva: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FechaReserva: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NumeroMesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mesa',
        key: 'NumeroMesa'
      }
    }
  }, {
    sequelize,
    tableName: 'mesareserva',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdReserva" },
        ]
      },
      {
        name: "NumeroMesa",
        using: "BTREE",
        fields: [
          { name: "NumeroMesa" },
        ]
      },
    ]
  });
};
