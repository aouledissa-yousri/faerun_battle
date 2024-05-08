import { TrainingPhase } from "./phases/TrainingPhase.js"


export class Game {

    turn = 0
    phase = null
    player = 0

    constructor() {
        this.player = Math.floor(Math.random() * 2) + 1
        this.phase = new TrainingPhase()
        this.turn = 1
    }

    getPhase(){
        return this.phase
    }

    getTurn(){
        return this.turn
    }

    nextTurn() {
        this.turn++

        if(this.player === 1) this.player = 2
        else this.player = 1
    }
}