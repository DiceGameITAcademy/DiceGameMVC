"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
// import { Player } from '../models/player.model'; // Import your Player model
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'dicegame',
    username: 'root',
    password: 'password',
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    logging: console.log,
});
// sequelize.addModels([Player]); // Add your Player model to Sequelize
exports.default = sequelize;
