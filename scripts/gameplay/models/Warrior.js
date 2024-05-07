

export class Warrior {

    health = 100
    force = 10
    dead = false




    attack(warrior){
        warrior.takeDamage(this.force * this.generateAttackForce())
    }

    takeDamage(force){
        health -= force
        if(health === 0) this.dead = true
    }

    generateAttackForce(){
        let damage = 0

        for(let i=0; i<3; i++){
            const num = Math.floor(Math.random() * 4)
            damage += num * force
        }

        return damage
    }

}