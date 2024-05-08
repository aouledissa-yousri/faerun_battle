import { Phase } from "./Phase.js";
import { TrainingPhase } from "./TrainingPhase.js";



export class EndPhase extends Phase{

    nextPhase() {
        return new TrainingPhase()
    }

    getPhase(){
        return "End Phase"   
    }

}