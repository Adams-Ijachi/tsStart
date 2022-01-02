export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    greeting() {
        return `${this.client} owns ${this.details} it cost ${this.amount}`;
    }
    changeAmount(a) {
        this.amount += a;
    }
}
