import { DivComponent } from "../../common/div-component";

import './header.css';

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.element.innerHTML = '';
        this.element.classList.add('header');
        this.element.innerHTML = `
                <div>
                    <img src="/static/logotype.svg" alt="Logotype" />
                </div>
            <div class="menu">
                <a class="menu__item" href="/">
                    <img src="/static/search.svg" alt="Поиск" />
                    Поиск книг
                </a>

                <a class="menu__item" href="#favorites">
                    <img src="/static/favorites.svg" alt="Избранное" />
                    Избранное
                    <div class="menu__counter">
                        ${this.appState.favorites.length}
                    </div>
                </a>
            </div>
        `;

        return this.element;
    }
}