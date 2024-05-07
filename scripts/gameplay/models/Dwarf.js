
import { Warrior } from "./Warrior.js";


export class Dwarf extends Warrior {

    attack(warrior){
        warrior.takeDamage((this.damage * this.generateAttackForce())*2)
    }

}
