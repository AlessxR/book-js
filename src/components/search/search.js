import { DivComponent } from "../../common/div-component";

import './search.css';

export class Search extends DivComponent {

    constructor(state) {
        super();
        this.state = state;
    }

    render() {
        this.element.classList.add('search');
        this.element.innerHTML = `
            <div class="search__wrapper">
                
            
            
            </div>
        `;

        return this.element;
    }
}