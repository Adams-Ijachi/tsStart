
import { HasFormatter } from './../interfaces/hasFormatter.js';

export class Payment implements HasFormatter {
    

    constructor(
       private recipent: string,
       private details:string,
       private  amount:number
    ){}

    greeting(){
        return `${this.recipent} is owed ${this.details} it cost ${this.amount}`
    }

    changeAmount(a:number){
        this.amount += a;
    }
}