import { EditUserModal, toggleModal } from "./modal.js";
import { deleteUserOnServer } from "./delete.js";
const container = document.getElementById("container");
let userArray = [];
function renderUsers(data) {
    userArray = data.map((user) => {
        return renderUser(user);
    });
}
function renderUser(user) {
    // Create user container
    const userContainer = document.createElement("div");
    userContainer.classList.add("user");
    container.appendChild(userContainer);
    // Apent username
    const span = document.createElement("span");
    span.innerHTML = user.name;
    userContainer.appendChild(span);
    // Create userOptions container
    const userOptions = document.createElement("div");
    userOptions.classList.add("user-options");
    userContainer.appendChild(userOptions);
    // Create button Edit
    const buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = "Edit";
    userOptions.appendChild(buttonEdit);
    // append userId => value to button edit
    buttonEdit.value = user.id;
    // Add event listener to button edit
    buttonEdit.addEventListener("click", toggleModal);
    buttonEdit.addEventListener("click", EditUserModal);
    // Create button Delete
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Delete";
    userOptions.appendChild(buttonDelete);
    // append userId => value to button delete
    buttonDelete.value = user.id;
    // Add event listener to button delete
    buttonDelete.addEventListener("click", deleteUserOnServer);
    //  Create moreOptionsIcon
    const moreOptionsIcon = document.createElement("img");
    moreOptionsIcon.src = "../public/more-options.jpg";
    userOptions.appendChild(moreOptionsIcon);
    moreOptionsIcon.addEventListener('click', () => {
        buttonEdit.classList.toggle("show-button");
        buttonDelete.classList.toggle("show-button");
    });
    return {
        userContainer,
        buttonEdit,
        buttonDelete,
        name: user.name,
        username: user.username,
        email: user.email,
        companyName: user.company.name,
    };
}
export { renderUsers, userArray, container };
