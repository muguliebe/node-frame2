const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('com_com_cd', {
    com_cd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "공통 코드 ID",
      primaryKey: true
    },
    com_grp_cd: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "공통 그룹 코드",
      unique: "com_common_code_pk_0"
    },
    com_cd: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "공통코드",
      unique: "com_common_code_pk_0"
    },
    com_cd_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "공통 코드명"
    },
    disp_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      comment: "사용여부"
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
    }
  }, {
    sequelize,
    tableName: 'com_com_cd',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "com_common_code_pk_0",
        unique: true,
        fields: [
          { name: "com_grp_cd" },
          { name: "com_cd" },
        ]
      },
      {
        name: "pk_com_com_cd_com_cd_id_0",
        unique: true,
        fields: [
          { name: "com_cd_id" },
        ]
      },
    ]
  });
};
