const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('btt_test_hst', {
    interval_sec: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "구간 초 (테스팅에 걸린 초)"
    },
    create_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "생성자 ID"
    },
    create_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "생성 일시"
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
    exchange_nm: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "거래소 명"
    },
    symbol_nm: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "심볼 명"
    },
    mfi_period_val: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "MFI 기간 값"
    },
    bb_period_val: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "BB 기간 수"
    },
    size_order_val: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "주문수량"
    },
    test_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "테스트 ID",
      primaryKey: true
    },
    test_dy: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "테스트 일자"
    },
    test_time: {
      type: DataTypes.STRING(6),
      allowNull: false,
      comment: "테스트 시간(hhmmss)"
    },
    frame_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "분봉"
    },
    start_val: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "시작 값"
    },
    final_val: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "종료 값"
    },
    bttst_cd: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "01",
      comment: "백테스팅상태 코드[01:시작, 02:종료, 03:에러]"
    },
    profit_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "이익률"
    }
  }, {
    sequelize,
    tableName: 'btt_test_hst',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "idx_btt_test_hst",
        fields: [
          { name: "test_dy" },
          { name: "test_time" },
          { name: "frame_min" },
        ]
      },
      {
        name: "idx_btt_test_hst_0",
        fields: [
          { name: "frame_min" },
          { name: "test_dy" },
          { name: "test_time" },
        ]
      },
      {
        name: "pk_btt_test_hst_test_id",
        unique: true,
        fields: [
          { name: "test_id" },
        ]
      },
    ]
  });
};
