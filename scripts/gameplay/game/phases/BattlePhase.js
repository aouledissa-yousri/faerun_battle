import { EndPhase } from "./EndPhase.js";
import { Phase } from "./Phase.js";


export class BattlePhase extends Phase{

    nextPhase() {
        return new EndPhase()
    }

    getPhase(){
        return "Battle Phase"
    }

}