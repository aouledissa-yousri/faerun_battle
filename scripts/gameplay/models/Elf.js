import { Warrior } from "./Warrior.js";


export class Elf extends Warrior {

    constructor(owner, id){
        super(owner, id)
        this.damage = super.damage * 2
    }

}