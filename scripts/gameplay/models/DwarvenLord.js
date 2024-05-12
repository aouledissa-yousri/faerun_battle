import { Dwarf } from "./Dwarf.js";


export class DwarvenLord extends Dwarf {

    constructor(owner, id) {
        super(owner, id)
        super.image = `../assets/dwarven-lord-${this.getOwner()}.png`
    }

    
    attack(warrior){
        warrior.takeDamage((this.damage * this.generateAttackForce())*4)
    }

}