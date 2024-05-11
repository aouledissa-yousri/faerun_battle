

export class GameplayUIHelper {

    static displayTrainedUnit(unit, image, player) {
        const parentDiv = document.createElement("div")
        parentDiv.setAttribute("class", "unit-to-train")

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
}