

export class Square {

    warriors = []

    moveToSquare(warrior){
        this.warriors.push(warrior)
    }

    moveFromSquare(square){
        this.warriors.forEach(warrior => {
            square.moveToSquare(warrior)
        })

        this.warriors.length = 0
    }
}