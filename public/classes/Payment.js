export class Payment {
    constructor(recipent, details, amount) {
        this.recipent = recipent;
        this.details = details;
        this.amount = amount;
    }
    greeting() {
        return `${this.recipent} is owed ${this.details} it cost ${this.amount}`;
    }
    changeAmount(a) {
        this.amount += a;
    }
}
