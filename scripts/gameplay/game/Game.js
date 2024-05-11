import { Field } from "../models/Field.js"
import { Castle } from "../models/Castle.js"
import { TrainingPhase } from "./phases/TrainingPhase.js"


export class Game {

    turn = 0
    phase = null
    player = 0
    field = null

    castle1 = null
    castle2 = null

    constructor() {
        this.player = Math.floor(Math.random() * 2) + 1
        this.phase = new TrainingPhase()
        this.turn = 1
        this.field = new Field()

        this.castle1 = new Castle("player1")
        this.castle2 = new Castle("player2")
    }

    getField() {
        return this.field
    }

    getCastle1() {
        return this.castle1
    }

    getCastle2() {
        return this.castle2
    }

    getPhase(){
        return this.phase
    }

    getTurn(){
        return this.turn
    }

    getPlayer(){
        return this.player
    }

    nextPhase(){
        this.phase = this.phase.nextPhase()
    }

    nextTurn() {
        this.turn++

        if(this.player === 1) this.player = 2
        else this.player = 1

    }


}