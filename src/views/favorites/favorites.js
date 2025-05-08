import { AbstractView } from "../../common/view";
import { Header } from "../../components/header/header";

import onChange from "on-change";

import { CardList } from "../../components/card-list/card-list";

export class FavoritesView extends AbstractView {

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle('Мои избранные книги');
    }

    destroy() {
        onChange.unsubscribe(this.appState);
    }

    appStateHook(path) {
        if (path === 'favorites') {
            this.render();
        }
    }
    
    render() {
        console.log('MainView render called');
        const main = document.createElement('div');
        main.innerHTML = `
            <h1>Избранных книг - ${this.parentState.numFound}</h1>
        `;
        main.append(new CardList(this.appState, { list: this.appState.favorites }).render());
        // main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
        this.app.innerHTML = '';

        const header = new Header(this.appState).render();

        this.app.append(header);
        this.app.append(main);
        // this.appState.favorites.push('d');
    }

    renderHeader() {
        console.log('Rendering header');
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}