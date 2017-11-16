

//const htmlString = (strings, ...values) => {
function htmlString(strings, ...values){
    let str = '';
    values.forEach((val, i) => {
        let string = strings[i];
        if (Array.isArray(val))
            val = val.join('');
        //str += string + (val || '');
        str += string;
        str += val;
    });
    return str += strings[strings.length - 1];
};
const node = data => htmlString`
    <li data-depth="${data.depth}">
      <p class="node">${data.displayName}</p>
    </li>
    ${data.childrenCount ? treeTemplate(data) : ``}
`;
const treeTemplate = data => htmlString`
  <ul class="tree " data-children-count="${data.children.length}">
    ${data.children.map(data => node(data))}
  </ul>
`;
export { treeTemplate };