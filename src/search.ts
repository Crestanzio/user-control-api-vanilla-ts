import { container, userArray } from "./renderUsers.js";

const search = document.createElement("input");
container.appendChild(search);
search.addEventListener("input", find);
search.setAttribute("type", "search");
search.setAttribute("placeholder", "Search");

function find(event: HTMLElementEvent<InputEvent, HTMLInputElement>) {
  let value = event.target.value.toLowerCase();
  userArray.forEach((user) => {
    let name = user.name.toLowerCase();
    let isValid = name.match(value);
    user.userContainer.classList.toggle("hide", !isValid);
  });
}
export { find };