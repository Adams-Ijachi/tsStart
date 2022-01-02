import { HasFormatter } from './../interfaces/hasFormatter.js';

export class ListTemplate {

    constructor( private container: HTMLUListElement){}

    render(item: HasFormatter,heading:string,position: 'start'| 'end'){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');

        h4.textContent = heading;
        li.appendChild(h4)

        const p = document.createElement('p');
        p.textContent = item.greeting()

        li.appendChild(p)

        if(position=='start'){
            this.container.prepend(li)
        }
        else{
            this.container.append(li)
        }


    }
}
