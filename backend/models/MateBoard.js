const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/sequelize");
const Users = require("./Users");
const Animals = require("./Animals");

const MateBoard = sequelize.define("MateBoard", {
        mateBoardIndexNumber: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        mateBoardTitle: {
            type: DataTypes.STRING
        },
        mateBoardFee: {
            type: DataTypes.INTEGER
        },
        mateBoardContent1: {
            type: DataTypes.TEXT
        },
        mateBoardContent2: {
            type: DataTypes.TEXT
        },
        mateBoardPhotos: {
            type: DataTypes.TEXT
        },
        mateBoardCategory: {
            type: DataTypes.INTEGER
        },
        mateBoardRegistDate: {
            type: DataTypes.STRING
        },
        mateBoardModifyDate: {
            type: DataTypes.STRING
        },
        mateBoardStatus: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        usersIndexNumber: {
            type: DataTypes.BIGINT,
        },
        animalsIndexNumber: {
            type: DataTypes.BIGINT
        }
    },
    {
        sequelize,
        tableName: "MateBoard",
        timestamps: false,
        modelName: "MateBoard",
    }
);

MateBoard.belongsTo(Users, { 
    foreignKey: "usersIndexNumber", 
    targetKey: "usersIndexNumber", 
    as: "Users"
});

MateBoard.belongsTo(Animals, {
    foreignKey: "animalsIndexNumber",
    targetKey: "animalsIndexNumber",
    as: "Animals"
})

module.exports = MateBoard;