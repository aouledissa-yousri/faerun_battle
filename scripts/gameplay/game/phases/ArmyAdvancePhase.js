import { BattlePhase } from "./BattlePhase.js";
import { Phase } from "./Phase.js";


export class ArmyAdvancePhase extends Phase {
    

    nextPhase() {
        return new BattlePhase()
    }

    getPhase(){
        return "Army Advance Phase"   
    }

    moveArmy(field) {
        for(let i=0; i<4; i++) field.getSquare(i).moveFromSquare(field.getSquare(i+1))
    }

}