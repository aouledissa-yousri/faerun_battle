import { Phase } from "./Phase.js";
import { ArmyAdvancePhase } from "./ArmyAdvancePhase";

export class TrainingPhase extends Phase {


    nextPhase() {
        return new ArmyAdvancePhase()
    }

    getPhase(){
        return "Training Phase"
    }

}