
import { Warrior } from "./Warrior.js";


export class Dwarf extends Warrior {

    constructor(owner, id) {
        super(owner, id)
        super.image = `../assets/dwarf-${this.getOwner()}.png`
    }

    attack(warrior){
        warrior.takeDamage((this.damage * this.generateAttackForce())*2)
    }

}
