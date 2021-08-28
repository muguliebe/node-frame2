const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('btt_prmt_mst', {
    create_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "생성 일시"
    },
    prmt_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "파라미터 ID",
      primaryKey: true
    },
    frame_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "프레임 분( 몇분봉 )"
    },
    mfi_period_val: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 14,
      comment: "MFI 기간 값"
    },
    create_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "생성자 ID"
    },
    update_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "수정자 ID"
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "수정 일시"
    },
    bb_period_val: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50,
      comment: "볼린저밴드 기간 값"
    },
    margin_top_val: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "마진 상단 값"
    },
    margin_bot_val: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "마진 하단 값"
    }
  }, {
    sequelize,
    tableName: 'btt_prmt_mst',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "pk_btt_prmt_mst_prmt_id",
        unique: true,
        fields: [
          { name: "prmt_id" },
        ]
      },
    ]
  });
};
