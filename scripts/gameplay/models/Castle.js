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

    getResource() {
        return this.resource
    }


    incrementResource() {
        this.resource++
    }

    chooseUnitTraining(unit){
        if(unit === "Warrior" || unit === "Elf" || unit === "Dwarf" || unit === "HighElf" || unit === "DwarvenLord") this.unitsToTrain.push(unit)
    }

    train() {
        const trainedUnits = []

        this.unitsToTrain.forEach((unit, index) => {
            
            switch(unit){
                case "Warrior": if(this.resource >= 1) trainedUnits.push(this.trainWarrior(index)); break;
                case "Elf": if(this.resource >= 2) trainedUnits.push(this.trainElf(index)); break;
                case "Dwarf": if(this.resource >= 1) trainedUnits.push(this.trainDwarf(index)); break;
                case "High Elf": if(this.resource >= 4) trainedUnits.push(this.trainHighElf(index)); break;
                case "Dwarven Lord": if(this.resource >= 3) trainedUnits.push(this.trainDwarvenLord(index)); break;
            }

            this.unitsToTrain.splice(index, 1)
        })

        return trainedUnits

    }

    trainWarrior(id) {
        this.resource--
        return new Warrior(this.owner, id)
    }

    trainDwarf(id){
        this.resource--
        return new Dwarf(this.owner, id)
    }

    trainDwarvenLord(id){
        this.resource -= 3
        return new DwarvenLord(this.owner, id)
    }

    trainElf(id){
        this.resource -= 2
        return new Elf(this.owner, id)
    }

    trainHighElf(id){
        this.resource -= 4
        return new HighElf(this.owner, id)
    }
    
}