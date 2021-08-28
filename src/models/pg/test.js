const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test', {
    test_id: {
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
    tableName: 'test',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "pk_test_test_id",
        unique: true,
        fields: [
          { name: "test_id" },
        ]
      },
    ]
  });
};
