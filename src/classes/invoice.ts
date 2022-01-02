
import { HasFormatter } from './../interfaces/hasFormatter.js';

export class Invoice implements HasFormatter {
    

    constructor(
       private client: string,
       private details:string,
       private  amount:number
    ){}

    greeting(){
        return `${this.client} owns ${this.details} it cost ${this.amount}`
    }

    changeAmount(a:number){
        this.amount += a;
    }
}