"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sequelizeConnection_1 = require("../server/sequelizeConnection");
const createPlayerPostRouter_1 = __importDefault(require("./routes/createPlayerPostRouter"));
const createApp = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({ origin: "*" }));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    console.log(`this will be a dice game`);
    (0, sequelizeConnection_1.connectToDatabase)();
    app.use(createPlayerPostRouter_1.default);
    //app.use("/api/players", createPlayerRouter);
    return app;
};
exports.default = createApp;
