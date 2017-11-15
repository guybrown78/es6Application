
const html = (literal, ...cooked) => {
  let result = '';
  cooked.forEach((cook, i) => {
    let lit = literal[i];
    if (Array.isArray(cook)) {
      cook = cook.join('');
    }
    result += lit;
    result += cook;
  });
  result += literal[literal.length - 1];
  return result;
};
const htmlExpr = (literal, ...expressions) => {
  return literal.reduce((accumulator, part, i) => {
    return accumulator + expressions[i - 1].toUpperCase() + part;
  });
};
const node = data => html`
  <li data-depth="${data.depth}">
    <p class="node">${data.displayName}</p>
  </li>
`;
const treeTemplate = data => html`
  <ul class="tree " data-children-count="${data.children.length}">
    ${data.children.map(data => node(data))}
  </ul>
`;
export { treeTemplate };