const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('btc_symbol_mst', {
    symbol_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    exchange_nm: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "거래소 명"
    },
    symbol_nm: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "심볼 명"
    }
  }, {
    sequelize,
    tableName: 'btc_symbol_mst',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "pk_btc_symbol_mst_symbol_id",
        unique: true,
        fields: [
          { name: "symbol_id" },
        ]
      },
    ]
  });
};
