import { Warrior } from "./Warrior.js";


export class Elf extends Warrior {

    constructor(owner, id){
        super(owner, id)
        super.image = `../assets/elf-${this.getOwner()}.png`
        this.damage = super.damage * 2
    }

}