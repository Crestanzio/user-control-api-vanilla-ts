import { userArray } from "./renderUsers.js";
import { Api } from "./index.js";
function deleteUserOnServer(event) {
    let user = userArray.find((user) => user.buttonDelete.value === event.target.value);
    user.userContainer.remove();
    let test = new Api();
    test.deleteUser(event.target.value);
}
export { deleteUserOnServer };
