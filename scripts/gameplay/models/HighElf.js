import { Elf } from "./Elf.js";


export class HighElf extends Elf {

    constructor(){
        this.damage = super.damage * 2
    }

}