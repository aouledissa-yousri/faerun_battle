import { Warrior } from "./Warrior.js"
import { Dwarf } from "./Dwarf.js"
import { DwarvenLord } from "./DwarvenLord.js"
import { Elf } from "./Elf.js"
import { HighElf } from "./HighElf.js"

export class Castle {

    resource = 3
    unitsToTrain = []
    owner = ""

    static idCounter = 1

    constructor(owner) {
        this.owner = owner
    }

    getResource() {
        return this.resource
    }

    getUnitsToTrain() {
        return this.unitsToTrain
    }

    getIdCounter() {
        return this.idCounter
    }


    incrementResource() {
        this.resource++
    }

    chooseUnitTraining(unit){
        if(unit === "Warrior" || unit === "Elf" || unit === "Dwarf" || unit === "High Elf" || unit === "Dwarven Lord") this.unitsToTrain.push(unit)
    }

    train() {
        const trainedUnits = []

        this.unitsToTrain.forEach((unit, index) => {

            let trained = false
            
            switch(unit){
                case "Warrior": if(this.resource >= 1) {trained = true; trainedUnits.push(this.trainWarrior(Castle.idCounter));} break;
                case "Elf": if(this.resource >= 2) {trained = true; trainedUnits.push(this.trainElf(Castle.idCounter));} break;
                case "Dwarf": if(this.resource >= 1) {trained = true; trainedUnits.push(this.trainDwarf(Castle.idCounter));} break;
                case "High Elf": if(this.resource >= 4) {trained = true; trainedUnits.push(this.trainHighElf(Castle.idCounter));} break;
                case "Dwarven Lord": if(this.resource >= 3) {trained = true; trainedUnits.push(this.trainDwarvenLord(Castle.idCounter));} break;
            }

            if(trained === true) {
                Castle.idCounter++
                this.unitsToTrain.splice(index, 1)
            }
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