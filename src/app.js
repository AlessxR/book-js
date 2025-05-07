import { MainView } from "./views/main/main";

console.log('app.js started');
class App {

    routes = [
        { path: "", view: MainView },
        { path: "#", view: MainView},
        { path: "#/", view: MainView}
    ];


    appState = {
        favorites: []
    };

    constructor() {
        window.addEventListener('hashchange', this.route.bind(this));
        this.route();
    }

    route() {
        console.log('Routing...'); // 1️⃣

        if (this.currentview) {
            console.log('Destroying current view');
            this.currentview.destroy();
        }

        console.log('Current hash:', location.hash); // 2️⃣

        const match = this.routes.find(r => r.path === location.hash);
        console.log('Matched route:', match); // 3️⃣

        if (!match) {
            console.warn('No matching route found');
            return;
        }

        const view = match.view;
        this.currentview = new view(this.appState);
        this.currentview.render();
    }
}

new App();