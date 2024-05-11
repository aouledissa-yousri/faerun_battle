import { Game } from "./game/Game.js";
import { GameplayUIHelper } from "./helpers/GameplayUIHelper.js";

export const game = new Game()


//declare UI elements

const nextPhase = document.getElementById("next-phase")
const turn = document.getElementById("turn")
const phase = document.getElementById("phase")
const player = document.getElementById("player")


const playerPanels = [
    {
        warriors: [],
        resource: document.getElementById("resource1"),
        warrior: document.getElementById("warrior-1"),
        dwarf: document.getElementById("dwarf-1"),
        elf: document.getElementById("elf-1"),
        dwarvenLord: document.getElementById("dwarven-lord-1"),
        highElf: document.getElementById("high-elf-1"),
        unitsContainer: document.getElementById("unit-select-1")
    },

    {
        warriors: [],
        resource: document.getElementById("resource2"),
        warrior: document.getElementById("warrior-2"),
        dwarf: document.getElementById("dwarf-2"),
        elf: document.getElementById("elf-2"),
        dwarvenLord: document.getElementById("dwarven-lord-2"),
        highElf: document.getElementById("high-elf-2"),
        unitsContainer: document.getElementById("unit-select-2")
    }
]



//init UI
turn.innerText = game.getTurn()
phase.innerText = game.getPhase().getPhase()
player.innerText = game.getPlayer()

playerPanels[0].resource.innerText = game.getCastle1().getResource()
playerPanels[1].resource.innerText = game.getCastle2().getResource()


playerPanels.forEach((panel, index) => { if(game.getPlayer() - 1 !== index) panel.unitsContainer.classList.add("disabled-container")})

//declare events

nextPhase.addEventListener("click", () => {
    game.nextPhase()
    phase.innerText = game.getPhase().getPhase()

    switch(phase.innerText) {

        case "Training Phase":
            playerPanels[game.getPlayer() - 1].unitsContainer.classList.remove("disabled-container")
            playerPanels.forEach((panel, index) => { if(game.getPlayer() - 1 !== index) panel.unitsContainer.classList.add("disabled-container")}) 
            break;

        case "Army Advance Phase":
            playerPanels[game.getPlayer() - 1].unitsContainer.classList.add("disabled-container")
            break;
        
        //case "Battle Phase":

        case "End Phase": 
            game.nextTurn()

            game.getCastle1().incrementResource()
            playerPanels[0].resource.innerText = game.getCastle1().getResource()

            game.getCastle2().incrementResource()
            playerPanels[1].resource.innerText = game.getCastle1().getResource()


            player.innerText = game.getPlayer()
            turn.innerText = game.getTurn()
    }
})


playerPanels[0].warrior.addEventListener("click", () => {
    game.getCastle1().chooseUnitTraining("Warrior")
    GameplayUIHelper.displayTrainedUnit("Warrior", "../assets/warrior.webp", 1)

    playerPanels[0].warriors = playerPanels[0].warriors.concat(game.getCastle1().train())
    playerPanels[0].resource.innerText = game.getCastle1().resource
    

})

playerPanels[0].dwarf.addEventListener("click", () => {
    game.getCastle1().chooseUnitTraining("Dwarf")
    GameplayUIHelper.displayTrainedUnit("Dwarf", "../assets/dwarf.jpg", 1)

    playerPanels[0].warriors = playerPanels[0].warriors.concat(game.getCastle1().train())
    playerPanels[0].resource.innerText = game.getCastle1().resource


})

playerPanels[0].elf.addEventListener("click", () => {
    game.getCastle1().chooseUnitTraining("Elf")
    GameplayUIHelper.displayTrainedUnit("Elf", "../assets/elf.jpeg", 1)

    playerPanels[0].warriors = playerPanels[0].warriors.concat(game.getCastle1().train())
    playerPanels[0].resource.innerText = game.getCastle1().resource
})

playerPanels[0].dwarvenLord.addEventListener("click", () => {
    game.getCastle1().chooseUnitTraining("Dwarven Lord")
    GameplayUIHelper.displayTrainedUnit("Dwarven Lord", "../assets/dwarven_lord.jpg", 1)

    playerPanels[0].warriors = playerPanels[0].warriors.concat(game.getCastle1().train())
    playerPanels[0].resource.innerText = game.getCastle1().resource
})

playerPanels[0].highElf.addEventListener("click", () => {
    game.getCastle1().chooseUnitTraining("High Elf")
    GameplayUIHelper.displayTrainedUnit("High Elf", "../assets/high_elf.jpeg", 1)

    playerPanels[0].warriors = playerPanels[0].warriors.concat(game.getCastle1().train())
    playerPanels[0].resource.innerText = game.getCastle1().resource
})






playerPanels[1].warrior.addEventListener("click", () => {
    game.getCastle2().chooseUnitTraining("Warrior")
    GameplayUIHelper.displayTrainedUnit("Warrior", "../assets/warrior.webp", 2)

    playerPanels[1].warriors = playerPanels[1].warriors.concat(game.getCastle2().train())
    playerPanels[1].resource.innerText = game.getCastle2().resource
})

playerPanels[1].dwarf.addEventListener("click", () => {
    game.getCastle2().chooseUnitTraining("Dwarf")
    GameplayUIHelper.displayTrainedUnit("Dwarf", "../assets/dwarf.jpg", 2)

    playerPanels[1].warriors = playerPanels[1].warriors.concat(game.getCastle2().train())
    playerPanels[1].resource.innerText = game.getCastle2().resource
})

playerPanels[1].elf.addEventListener("click", () => {
    game.getCastle2().chooseUnitTraining("Elf")
    GameplayUIHelper.displayTrainedUnit("Elf", "../assets/elf.jpeg", 2)

    playerPanels[1].warriors = playerPanels[1].warriors.concat(game.getCastle2().train())
    playerPanels[1].resource.innerText = game.getCastle2().resource
})

playerPanels[1].dwarvenLord.addEventListener("click", () => {
    game.getCastle2().chooseUnitTraining("Dwarven Lord")
    GameplayUIHelper.displayTrainedUnit("Dwarven Lord", "../assets/dwarven_lord.jpg", 2)

    playerPanels[1].warriors = playerPanels[1].warriors.concat(game.getCastle2().train())
    playerPanels[1].resource.innerText = game.getCastle2().resource
})

playerPanels[1].highElf.addEventListener("click", () => {
    game.getCastle2().chooseUnitTraining("High Elf")
    GameplayUIHelper.displayTrainedUnit("High Elf", "../assets/high_elf.jpeg", 2)

    playerPanels[1].warriors = playerPanels[1].warriors.concat(game.getCastle2().train())
    playerPanels[1].resource.innerText = game.getCastle2().resource
})

