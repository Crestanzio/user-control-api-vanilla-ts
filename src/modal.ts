import { userArray } from "./renderUsers.js";
import { Api } from "./index.js";
// Modal
const modalOverlay = document.getElementsByClassName("modal-overlay")[0] as HTMLDivElement;
const modalIcon = document.getElementsByClassName("modal-icon")[0] as HTMLSpanElement;
modalIcon.addEventListener("click", toggleModal);
// Input
const inputUsername = document.getElementsByTagName("input")[0];
const inputName = document.getElementsByTagName("input")[1];
const inputEmail = document.getElementsByTagName("input")[2];
const inputCompanyName = document.getElementsByTagName("input")[3];
// Button
const submitButton = document.getElementById("submit-button") as HTMLButtonElement;
submitButton.addEventListener("click", UpdateUserOnServer);
const cancelBtn = document.getElementsByTagName("button")[0] as HTMLButtonElement;
cancelBtn.addEventListener("click", toggleModal);

function EditUserModal(event: HTMLElementEvent<MouseEvent, HTMLButtonElement>) {
  let user = userArray.find((user) => user.buttonEdit.value === event.target.value);
  submitButton.value = user.buttonEdit.value;
  inputUsername.value = user.name;
  inputName.value = user.username;
  inputEmail.value = user.email;
  inputCompanyName.value = user.companyName;
}

function UpdateUserOnServer(event: HTMLElementEvent<MouseEvent, HTMLButtonElement>) {
  let username = inputName.value;
  let name = inputUsername.value;
  let email = inputEmail.value;
  let company = inputCompanyName.value;
  let test = new Api();
  test.updateUser(event.target.value, username, name, email, company);
}

function toggleModal() {
  modalOverlay.classList.toggle("show-modal");
}

export { EditUserModal, toggleModal };