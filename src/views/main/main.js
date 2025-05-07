import { AbstractView } from "../../common/view";
import { Header } from "../../components/header/header";

import onChange from "on-change";

export class MainView extends AbstractView {

    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    };

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle('Поиск книг');
    }

    appStateHook(path) {
        if (path === 'favorites') {
            console.log(path);
        }
    }
    
    render() {
        console.log('MainView render called');
        const main = document.createElement('div');
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