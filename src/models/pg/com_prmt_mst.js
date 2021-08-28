const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('com_prmt_mst', {
    prmt_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prmt_nm: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "파라미터 명"
    },
    prmt_cnt: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      comment: "파라미터 내용"
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
    create_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "생성 일시"
    }
  }, {
    sequelize,
    tableName: 'com_prmt_mst',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "pk_com_prmt_mst_prmt_id",
        unique: true,
        fields: [
          { name: "prmt_id" },
        ]
      },
    ]
  });
};
