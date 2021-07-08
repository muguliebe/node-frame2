const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('com_com_grp_cd', {
    com_grp_cd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "공통 그룹 코드 ID(for JPA)",
      primaryKey: true
    },
    com_grp_cd: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "공통 그룹 코드"
    },
    com_grp_cd_name: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "공통 그룹 코드명"
    },
    cd_max_len: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "코드 최대 길이"
    },
    expl: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "설명"
    },
    use_yn: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "Y",
      comment: "사용 여부"
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
      comment: "수정 일시"
    }
  }, {
    sequelize,
    tableName: 'com_com_grp_cd',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "pk_com_com_grp_cd_com_grp_cd_id_0",
        unique: true,
        fields: [
          { name: "com_grp_cd_id" },
        ]
      },
      {
        name: "unq_com_com_grp_cd_0",
        unique: true,
        fields: [
          { name: "com_grp_cd_name" },
        ]
      },
      {
        name: "unq_com_com_grp_cd_com_grp_cd_0",
        unique: true,
        fields: [
          { name: "com_grp_cd" },
        ]
      },
    ]
  });
};
