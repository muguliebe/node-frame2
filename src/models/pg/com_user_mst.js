const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('com_user_mst', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "사용자 ID",
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "이메일"
    },
    user_name: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "사용자명"
    },
    user_stat_cd: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "01",
      comment: "사용자상태코드[01:재직, 02:퇴사]"
    },
    user_type_cd: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "01",
      comment: "사용자유형코드[01:전산직원, 02:일반사용자, 03:개발테스트용]"
    },
    last_login_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "최종 로그인 일시"
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "비밀번호(해쉬값)"
    },
    use_yn: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "Y",
      comment: "사용여부"
    },
    create_user_id: {
      type: DataTypes.STRING(11),
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
      type: DataTypes.STRING(11),
      allowNull: true,
      comment: "수정자 ID"
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "수정일시"
    }
  }, {
    sequelize,
    tableName: 'com_user_mst',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "com_user_mst_email_index",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "com_user_mst_pk",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "com_user_mst_user_name_index",
        fields: [
          { name: "user_name" },
        ]
      },
    ]
  });
};
