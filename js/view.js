export default class View {
  constructor() {
    this.el = document.getElementById('pageContent');
  };
  render(data) {
    this.el.innerHTML = `<h4>rendered</h4>`;
    console.table(data);
  };
}