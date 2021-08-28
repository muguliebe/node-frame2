const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fwk_tr_hst', {
    gid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "글로벌 ID",
      unique: "idx_fwk_transaction_hst"
    },
    method: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "Http Method [GET,POST...]"
    },
    path: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      comment: "요청 경로"
    },
    status_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "응답 코드"
    },
    start_time: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "시작 시간"
    },
    end_time: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "종료 시간"
    },
    elapsed: {
      type: DataTypes.STRING(11),
      allowNull: true,
      comment: "경과 시간"
    },
    api_id: {
      type: DataTypes.STRING(9),
      allowNull: true,
      comment: "API ID"
    },
    remote_ip: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "요청지 IP"
    },
    query_string: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "요청 파라미터"
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "요청 바디"
    },
    referrer: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    mob_yn: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N",
      comment: "모바일 여부"
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
    app_nm: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "어플리케이션 명",
      unique: "idx_fwk_transaction_hst"
    },
    app_ver: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "어플리케이션 버전",
      unique: "idx_fwk_transaction_hst"
    },
    host_nm: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "호스트 명"
    },
    error_msg: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      comment: "에러 메시지"
    },
    create_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "생성 일시"
    },
    tr_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tr_dy: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "거래 일자",
      unique: "idx_fwk_transaction_hst"
    }
  }, {
    sequelize,
    tableName: 'fwk_tr_hst',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "idx_fwk_transaction_hst",
        unique: true,
        fields: [
          { name: "tr_dy" },
          { name: "app_nm" },
          { name: "app_ver" },
          { name: "gid" },
        ]
      },
      {
        name: "pk_fwk_tr_hst_tr_id",
        unique: true,
        fields: [
          { name: "tr_id" },
        ]
      },
    ]
  });
};
