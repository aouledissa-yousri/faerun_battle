import { Dwarf } from "./Dwarf.js";


export class DwarvenLord extends Dwarf {

    
    attack(warrior){
        warrior.takeDamage((this.damage * this.generateAttackForce())*4)
    }

}