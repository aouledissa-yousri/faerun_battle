import { Square } from "./Square.js";

export class Field {

    squares = []

    constructor(){
        for(let i=0; i<5; i++) this.squares.push(new Square())
    }

    getSquare(index){
        return this.squares[index]
    }

}