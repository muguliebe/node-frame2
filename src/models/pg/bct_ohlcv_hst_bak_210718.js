const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bct_ohlcv_hst_bak_210718', {
    ohlcv_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    frame: {
      type: DataTypes.STRING,
      allowNull: false
    },
    base_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    open: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    high: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    low: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    close: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    volume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    base_dy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    base_time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bct_ohlcv_hst_bak_210718',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "bct_ohlcv_hst_symbol_frame_base_dy_base_time_uindex_0",
        unique: true,
        fields: [
          { name: "symbol" },
          { name: "frame" },
          { name: "base_dy" },
          { name: "base_time" },
        ]
      },
      {
        name: "pk_bct_ohlcv_hst_ohlcv_id_0",
        unique: true,
        fields: [
          { name: "ohlcv_id" },
        ]
      },
    ]
  });
};
