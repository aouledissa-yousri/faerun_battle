

export class Warrior {

    id = 0
    health = 100
    force = 10
    dead = false
    owner = ""
    image = ""

    constructor(owner, id) {
        this.id = id
        this.owner = owner
        this.image = `../assets/warrior-${this.owner}.png`
    }

    getId() {
        return this.id
    }


    getHealth(){
        return this.health
    }

    getOwner(){
        return this.owner
    }


    getImage() {
        return this.image
    }




    attack(warrior){
        warrior.takeDamage(this.generateAttackForce())
    }

    takeDamage(force){
        this.health -= force
        if(this.health === 0) this.dead = true
    }

    generateAttackForce(){
        let damage = 0

        for(let i=0; i<3; i++){
            const num = Math.floor(Math.random() * 2)
            damage += num * this.force
        }

        return damage
    }

}