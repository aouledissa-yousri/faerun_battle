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
        this.unitsToTrain.forEach((index, unit) => {
            switch(unit){
                case "Warrior": if(resource >= 1) return this.trainWarrior()
                case "Elf": if(resource >= 2) return this.trainElf();
                case "Dwarf": if(resource >= 1) return this.trainDwarf();
                case "HighElf": if(resource >= 4) return this.trainHighElf();
                case "DwarvenLord": if(resource >= 3) return this.trainDwarvenLord();
            }

            this.unitsToTrain.splice(index, 1)
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