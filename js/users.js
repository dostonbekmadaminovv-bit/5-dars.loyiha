import { users } from "./data.js";
const userWrapper = document.querySelector(".user-wrapper");
const buttonEl = document.querySelector("#search");
const formEl = document.querySelector("#form");
////////////
window.deleteUser = function (id) {
  console.log(id);

  let index = users.findIndex((usr) => usr.id === id);
  users.splice(index, 1);
  data(users);
};
///////////////
export function data(arr) {
  userWrapper.innerHTML = " ";
  arr.forEach((user) => {
    userWrapper.innerHTML += `
    <div class="user">
    <img src="${user.image}" alt="${user.name}" />
    <h2>Name:${user.name}</h2>
    <h2>Last Name:${user.lastName}</h2>
    <h2>Id:${user.id}</h2>
            <p>Age:${user.age}</p>
            <p>Job:${user.job}</p>
            <p>Email:${user.email}</p>
            <p>Password:${user.password}</p>
            <button onclick="deleteUser(${user.id})" class="delete-btn"> delete </button>
        </div>

   `;
  });
}

data(users);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  let inputValue = Number(formData.get("search-input"));
  const filteredUsers = users.filter((user) => {
    return user.id === inputValue;
  });
  data(filteredUsers);
});
