import { DataTypes,Model, Sequelize } from 'sequelize';
import db from '../db/sequelize';


interface PlayerAttributes {
    id: number;
	name: string;
	date: string;
    wins:number;
    losses:number;
	winPercentage: number;
	createdAt: Date;
	updatedAt: Date;

}
export interface PlayerInstance extends Model<PlayerAttributes>,PlayerAttributes{}

export const PlayerDb = db.define<PlayerInstance>('players', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING
	},
	date: {
		type: DataTypes.STRING
	},
    wins:{
        type:DataTypes.FLOAT
    },
    losses:{
        type:DataTypes.FLOAT
    },
	winPercentage: {
		type: DataTypes.FLOAT
	},
	createdAt: {
		type: DataTypes.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false
	},
	updatedAt: {
		type: DataTypes.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false
	}
});

PlayerDb.sync();