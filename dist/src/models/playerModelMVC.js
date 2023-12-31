"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_config_1 = __importDefault(require("../../config/sequelize.config"));
class Player extends sequelize_1.Model {
}
Player.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    wins: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    losses: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    // Define other fields as needed
}, {
    sequelize: sequelize_config_1.default,
    modelName: 'Player',
    tableName: 'players',
    timestamps: false,
});
exports.default = Player;
