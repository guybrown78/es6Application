
import { treeTemplate } from './template.js';

export default class View {
  constructor() {
    this.el = document.getElementById('pageContent');
  };
  render(data) {
    this.el.innerHTML = treeTemplate(data);
    /*for (const node of data.children){
        console.log(node.childrenCount);
        console.table(node);
    }*/
  };
}