import {$fetchRequest} from './services/fetchRequest.js';

export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    };
    render(data){
        this.view.render(this.model);
    };
    setView(hash) {
        this.requestJSON(this.model.url);
        
    };
    onLoadComplete(data){
        this.model.parse(data);
        this.render();
    };
    requestJSON(url, method = 'GET'){
        $fetchRequest(url, method)
            // Chaining to convert to json
            .then(blob => blob.json())
            .then(data => this.onLoadComplete(data))
            .catch (error => console.log(`failed to load ${url}`));
    };
}