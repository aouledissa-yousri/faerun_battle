import { Warrior } from "./Warrior.js";


export class Elf extends Warrior {

    constructor(){
        this.damage = super.damage * 2
    }

}