const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valoraciones', {
    IdValoracion: {
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
    Descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'valoraciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdValoracion" },
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
