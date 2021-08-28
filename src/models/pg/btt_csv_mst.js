const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('btt_csv_mst', {
    csv_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "CSV ID",
      primaryKey: true
    },
    exchange_nm: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "거래소 명"
    },
    symbol_nm: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "심볼 명"
    },
    create_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "생성 일시"
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "수정 일시"
    },
    frame_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "분봉"
    },
    csv_file_nm: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "CSV 파일 명"
    }
  }, {
    sequelize,
    tableName: 'btt_csv_mst',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "pk_btt_csv_mst_csv_id",
        unique: true,
        fields: [
          { name: "csv_id" },
        ]
      },
    ]
  });
};
