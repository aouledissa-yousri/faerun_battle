import { Elf } from "./Elf.js";


export class HighElf extends Elf {

    constructor(owner, id){
        super(owner, id)
        this.damage = super.damage * 2
    }

}