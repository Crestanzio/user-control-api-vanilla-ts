import { renderUsers } from "./renderUsers.js";
import { find } from "./search.js";
export class Api {
    async getUsers() {
        let params = {
            method: "GET",
            headers: { Accept: "application/json" },
        };
        let response = await fetch("https://jsonplaceholder.typicode.com/users", params);
        let data = await response.json();
        renderUsers(data);
    }
    async updateUser(userId, username, name, email, companyName) {
        let params = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                name,
                email,
                company: {
                    companyName,
                },
            }),
        };
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, params);
    }
    async deleteUser(userId) {
        let params = {
            method: "DELETE",
        };
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, params);
    }
}
const test = new Api();
test.getUsers();
// search function
find;
