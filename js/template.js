import {$htmlString} from './views/templateTags/htmlString.js';

const node = data => $htmlString`
    <li data-depth="${data.depth}">
      <p class="node">${data.displayName}</p>
    </li>
    ${data.childrenCount ? treeTemplate(data) : ``}
`;
const treeTemplate = data => $htmlString`
  <ul class="tree " data-children-count="${data.children.length}">
    ${data.children.map(data => node(data))}
  </ul>
`;
export { treeTemplate };