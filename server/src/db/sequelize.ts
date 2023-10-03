import { Sequelize } from 'sequelize';

const db = new Sequelize(//titulo, //nombre', //Contraseñña, {
	host: 'db',
	dialect: 'mysql'
});

export default db;