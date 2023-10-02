"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const sequelize_config_1 = __importDefault(require("../config/sequelize.config")); // Import the sequelize instance directly
// ...
// Create a Sequelize instance with your configuration options
// const sequelize = new Sequelize(sequelizeConfig); // Remove this line
// Define a function to connect to the database
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize_config_1.default.authenticate();
        console.log('Connected to MySQL database');
    }
    catch (error) {
        console.error('Error connecting to MySQL database:', error);
    }
});
exports.connectToDatabase = connectToDatabase;
exports.default = sequelize_config_1.default; // Export the Sequelize instance for use in models and routes
