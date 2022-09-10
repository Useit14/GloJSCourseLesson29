import { showError } from "./helpers";
import { render } from "./render";

export const addUsers = () => {
  const form = document.querySelector("form");
  const nameInput = form.querySelector("#form-name");
  const emailInput = form.querySelector("#form-email");
  const childrenInput = form.querySelector("#form-children");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.dataset.method) {
      const user = {
        name: nameInput.value,
        email: emailInput.value,
        children: childrenInput.checked,
        permissions: false,
      };
      window.userService
        .sendData("http://localhost:4545/users", { method: "POST", body: user })
        .then(() => {
          window.userService
            .getUsers("http://localhost:4545/users")
            .then((users) => {
              render(users);
              form.reset();
            })
            .catch((error) => {
              showError("Произошла ошибка, данных нет!");
            });
        })
        .catch(() => {
          showError("Произошла ошибка, данных нет!");
        });
    }
  });
};
