import { Elf } from "./Elf.js";


export class HighElf extends Elf {

    constructor(owner, id){
        super(owner, id)
        super.image = `../assets/high-elf-${this.getOwner()}.png`
        this.damage = super.damage * 2
    }

}