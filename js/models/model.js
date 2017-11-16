
export default class Model {
    constructor() {
        this.url = 'https://gist.githubusercontent.com/guybrown78/89b4488855b970b54339600b8639d306/raw/fbd3e54cf9db464ba0fc655cd8495f3c2b5d6f6f/tree.json'
        this.children = [];
    }
    
    parse(data){
        console.log('MODEL PARSE');
        this.children.push(...data.children);
    };

}