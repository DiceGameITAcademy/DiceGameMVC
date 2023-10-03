import { Game } from '../Models/game'

export const roll = () => {
	return Math.floor(Math.random() * 6) + 1;
};

export const calcResult = (roll1: number, roll2: number) => {
	return roll1 + roll2;
};



export const playGame = (id: number): Game => {
	const diceValue1: number = roll();
	const diceValue2: number = roll();
	const result: number = calcResult(diceValue1,diceValue2);
	const win: boolean = false;
	const playerId: number = id;


	const gameResult: Game = {
		diceValue1,
		diceValue2,
		result,
        win,
		playerId
	};

	return gameResult;
};