const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'tmp',
        {
            seq: {
                // autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'tmp',
            schema: 'public',
            timestamps: false,
        }
    )
}
