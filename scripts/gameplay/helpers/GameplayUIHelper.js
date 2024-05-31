import { UtilsHelper } from "./UtilsHelper.js"


export class GameplayUIHelper {

    static displayTrainedUnit(unit, image, player) {
        const parentDiv = document.createElement("div")
        parentDiv.setAttribute("class", "unit-to-train")
        parentDiv.setAttribute("id", `unit-${document.getElementById(`unit-training-${player}`).getElementsByClassName("unit-to-train").length}`)

        const imgElement = document.createElement("img")
        imgElement.setAttribute("class", "unit-image")
        imgElement.setAttribute("src", image)

        const spanElement = document.createElement("span");
        spanElement.style.color = "white";
        spanElement.style.fontWeight = "bold";
        spanElement.textContent = unit;

        parentDiv.appendChild(imgElement)
        parentDiv.appendChild(spanElement)

        document.getElementById(`unit-training-${player}`).appendChild(parentDiv)
    }


    static addUnitToField(trainedUnits, playerPanels, player, field) {

        trainedUnits.forEach((unit, index) => {
            playerPanels[player - 1].warriors.push(unit)

            const divElement = document.createElement("div");
            divElement.classList.add("unit-to-train", `unit-player-${player}`);
            divElement.id = unit.getId()

            const spanElement = document.createElement("span");
            spanElement.classList.add("health-player-1");
            spanElement.textContent = "100";

            const brElement = document.createElement("br");

            const imgElement = document.createElement("img");
            imgElement.classList.add("unit-image");
            imgElement.src = unit.getImage();

            divElement.appendChild(spanElement);
            divElement.appendChild(brElement);
            divElement.appendChild(imgElement);

            if(player === 1) {
                document.getElementById("square-0").getElementsByClassName("area-player-1")[0].appendChild(divElement)
                field.getSquare(0).moveToSquare(unit)
            } else {
                document.getElementById("square-4").getElementsByClassName("area-player-2")[0].appendChild(divElement)
                field.getSquare(4).moveToSquare(unit)
            }

            GameplayUIHelper.endUnitTraining(player)
        })
    }

    static endUnitTraining(player) {
        document.getElementById(`unit-training-${player}`).querySelector(`#unit-${document.getElementById(`unit-training-${player}`).getElementsByClassName("unit-to-train").length - 1}`).remove()
    }

    static enterTrainingPhase(game, playerPanels, player) {

        let castle = null
        
        if(player === 1) castle = game.getCastle1()
        else castle = game.getCastle2()


        GameplayUIHelper.addUnitToField(castle.train(), playerPanels, player)
        
    }

    static advanceArmy(field, turn) {

        if(turn > 2) {
            for(let i=3; i>=0; i--) {

                field.getSquare(i).moveFromSquare(field.getSquare(i+1))
                if(GameplayUIHelper.squareEmpty(1, i)) GameplayUIHelper.movePlayerArmy(1, i)
            }
    
            for(let i=1; i<=4; i++) if(GameplayUIHelper.squareEmpty(2, i)) GameplayUIHelper.movePlayerArmy(2, i)
        }
            
        

    }

    static movePlayerArmy(player, index) {

        const playerUnits = document.getElementById(`square-${index}`).getElementsByClassName(`area-player-${player}`)[0].getElementsByClassName(`unit-player-${player}`)
        const armyDirection = (player === 1)? 1 : -1

        for(let j = playerUnits.length - 1; j >= 0; j--) document.getElementById(`square-${index+armyDirection}`).getElementsByClassName(`area-player-${player}`)[0].appendChild(playerUnits[j])
    }

    static squareEmpty(player, index) {
        return (player === 1)?
            document.getElementById(`square-${index}`).getElementsByClassName(`area-player-2`)[0].getElementsByClassName(`unit-player-2`).length === 0
        :   document.getElementById(`square-${index}`).getElementsByClassName(`area-player-1`)[0].getElementsByClassName(`unit-player-1`).length === 0
    }  
    
    
    static enterBattlePhase(player, playerPanels) {

        if(player === 1) {
           
            for(let i=0; i<5; i++) {
                const square = document.getElementById("square-"+i);

                if(square.getElementsByClassName("area-player-1")[0].getElementsByClassName("unit-player-1").length > 0) {
                   [... square.getElementsByClassName("area-player-1")[0].getElementsByClassName("unit-player-1")].forEach(element => {
                        const attacker =  playerPanels[player - 1].warriors.find(warrior => warrior.id === parseInt(element.id))
                        const randomEnemy = square.getElementsByClassName("area-player-2")[0].getElementsByClassName("unit-player-2")[UtilsHelper.getRandomInt(0, square.getElementsByClassName("area-player-2")[0].getElementsByClassName("unit-player-2").length -1)]
                        const defender = playerPanels[player].warriors.find(warrior => warrior.id === parseInt(randomEnemy.id))
                        attacker.attack(defender)
                        if(defender.getHealth() <= 0 || isNaN(defender.getHealth())) { randomEnemy.remove(); playerPanels[player].warriors.splice(playerPanels[player].warriors.findIndex(element => element.getId() === defender.getId()))}
                        else randomEnemy.getElementsByClassName("health-player-1")[0].innerHTML = defender.getHealth()
                    })
                }


            }
        }else {

            for(let i=0; i<5; i++) {
                const square = document.getElementById("square-"+i);

                if(square.getElementsByClassName("area-player-2")[0].getElementsByClassName("unit-player-2").length > 0) {
                   [... square.getElementsByClassName("area-player-2")[0].getElementsByClassName("unit-player-2")].forEach(element => {
                        const attacker =  playerPanels[player - 1].warriors.find(warrior => warrior.id === parseInt(element.id))
                        const randomEnemy = square.getElementsByClassName("area-player-1")[0].getElementsByClassName("unit-player-1")[UtilsHelper.getRandomInt(0, square.getElementsByClassName("area-player-1")[0].getElementsByClassName("unit-player-1").length -1)]
                        const defender = playerPanels[player -2].warriors.find(warrior => warrior.id === parseInt(randomEnemy.id))
                        attacker.attack(defender)

                        if(defender.getHealth() <= 0 || isNaN(defender.getHealth())) { randomEnemy.remove(); playerPanels[player-2].warriors.splice(playerPanels[player-2].warriors.findIndex(element => element.getId() === defender.getId()))}
                        else randomEnemy.getElementsByClassName("health-player-1")[0].innerHTML = defender.getHealth()
                    })
                }
            }

        }

        
    }


    static decideRoundWinner(player1, player2) {
        if(player1.warriors.length > player2.warriors.length) document.getElementById("result").innerHTML = "Player 1 Won the round"
        else if(player1.warriors.length < player2.warriors.length) document.getElementById("result").innerHTML = "Player 2 Won the round"
        else document.getElementById("result").innerHTML = "Round ended in a draw"
    }

    static decideGameWinner() {
        if(document.getElementById("square-0").getElementsByClassName("area-player-2")[0].getElementsByClassName("unit-player-2").length !== 0 && document.getElementById("square-0").getElementsByClassName("area-player-1")[0].getElementsByClassName("unit-player-1").length == 0) { document.getElementById("result").innerHTML = "Player 2 won"; document.getElementById("next-phase").disabled = true }
        else if(document.getElementById("square-4").getElementsByClassName("area-player-1")[0].getElementsByClassName("unit-player-1").length !== 0 && document.getElementById("square-4").getElementsByClassName("area-player-2")[0].getElementsByClassName("unit-player-2").length == 0) { document.getElementById("result").innerHTML = "Player 1 won"; document.getElementById("next-phase").disabled = true; }
    }

    static startNewRound() {
        document.getElementById("result").innerHTML = ""
    }

   
}