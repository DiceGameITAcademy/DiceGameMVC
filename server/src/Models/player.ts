export class Player {
	public id: number;
	public name: string;
	public date: string;
    public wins: number;
    public losses: number;
	public winPercentage: number;

	constructor(name: string) {
		this.id = 0;
		this.name = name;
		this.date = '';
        this.wins = 0;
        this.losses= 0;
		this.winPercentage = 0;
	}
}