//import {$fetchRequest} from './services/fetchRequest.js';
import View from './view';
import Model from './model';
import Controller from './controller';

class App {
  constructor() {
    const model = new Model();
    const view = new View();
    this.controller = new Controller(model, view);
  };
}

const app = new App();

const initialise = () => {
    app.controller.setView();//document.location.hash);
};

window.addEventListener('load', initialise);