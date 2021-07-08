const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_tmp_seq",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
