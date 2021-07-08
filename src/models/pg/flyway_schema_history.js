const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flyway_schema_history', {
    installed_rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    version: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    script: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    checksum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    installed_by: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    installed_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    execution_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    success: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'flyway_schema_history',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "flyway_schema_history_pk",
        unique: true,
        fields: [
          { name: "installed_rank" },
        ]
      },
      {
        name: "flyway_schema_history_s_idx",
        fields: [
          { name: "success" },
        ]
      },
    ]
  });
};
