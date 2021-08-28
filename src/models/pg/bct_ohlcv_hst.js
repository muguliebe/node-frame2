const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bct_ohlcv_hst', {
    exchange_nm: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "거래소 명"
    },
    base_dy: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "기준 일자"
    },
    base_time: {
      type: DataTypes.STRING(6),
      allowNull: false,
      comment: "기준 시각(hhmmdd)"
    },
    frame_min: {
      type: DataTypes.INTEGER,
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
    ohlcv_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    symbol_nm: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "심볼 명"
    },
    create_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'bct_ohlcv_hst',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "bct_ohlcv_hst_symbol_frame_base_dy_base_time_uindex",
        unique: true,
        fields: [
          { name: "exchange_nm" },
          { name: "symbol_nm" },
          { name: "frame_min" },
          { name: "base_dy" },
          { name: "base_time" },
        ]
      },
      {
        name: "pk_bct_ohlcv_hst_ohlcv_id",
        unique: true,
        fields: [
          { name: "ohlcv_id" },
        ]
      },
    ]
  });
};
