import { Warrior } from "./Warrior.js"
import { Dwarf } from "./Dwarf.js"
import { DwarvenLord } from "./DwarvenLord.js"
import { Elf } from "./Elf.js"
import { HighElf } from "./HighElf.js"

export class Castle {

    resource = 3
    unitsToTrain = []
    owner = ""

    constructor(owner) {
        this.owner = owner
    }


    incrementResource() {
        this.resource++
    }

    chooseUnitTraining(unit){
        if(unit === "Warrior" || unit === "Elf" || unit === "Dwarf" || unit === "HighElf" || unit === "DwarvenLord") this.unitsToTrain.push(unit)
    }

    train() {
        this.unitsToTrain.forEach((unit) => {
            switch(unit){
                case "Warrior": if(resource >= 1) { this.trainWarrior(); break; }
                case "Elf": if(resource >= 2) { this.trainElf(); break; }
                case "Dwarf": if(resource >= 1) { this.trainDwarf(); break; }
                case "HighElf": if(resource >= 4) { this.trainHighElf(); break; }
                case "DwarvenLord": if(resource >= 3) { this.trainDwarvenLord(); break; }
            }
        })
    }

    trainWarrior() {
        this.resource--
        return new Warrior(this.owner)
    }

    trainDwarf(){
        this.resource--
        return new Dwarf(this.owner)
    }

    trainDwarvenLord(){
        this.resource -= 3
        return new DwarvenLord(this.owner)
    }

    trainElf(){
        this.resource -= 2
        return new Elf(this.owner)
    }

    trainHighElf(){
        this.resource -= 4
        return new HighElf(this.owner)
    }
    
}