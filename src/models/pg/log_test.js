const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_test', {
    seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    err_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    err_msg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    serv_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tm: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'log_test',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "log_test_pkey",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
