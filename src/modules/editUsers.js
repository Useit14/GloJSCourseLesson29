import { render } from "./render";
import { showError } from "./helpers";

export const editUsers = () => {
  const form = document.querySelector("form");
  const nameInput = form.querySelector("#form-name");
  const emailInput = form.querySelector("#form-email");
  const childrenInput = form.querySelector("#form-children");

  const tbody = document.querySelector("#table-body");
  tbody.addEventListener("click", (event) => {
    if (event.target.closest(".btn-edit")) {
      const tr = event.target.closest("tr");
      const id = tr.dataset.key;

      userService
        .getData("http://localhost:4545/users", { id: id })
        .then((user) => {
          nameInput.value = user.name;
          emailInput.value = user.email;
          childrenInput.value = user.children;
          form.dataset.method = id;
        })
        .catch(() => showError("Произошла ошибка, данных нет!"));
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.dataset.method) {
      const id = form.dataset.method;
      const user = {
        name: nameInput.value,
        email: emailInput.value,
        children: childrenInput.checked,
        permissions: false,
      };
      window.userService
        .sendData("http://localhost:4545/users", {
          method: "PUT",
          id: id,
          body: user,
        })
        .then(() => {
          window.userService
            .getData("http://localhost:4545/users")
            .then((users) => {
              render(users);
              form.reset();
              form.removeAttribute("data-method");
            })
            .catch(() => showError("Произошла ошибка, данных нет!"));
        })
        .catch(() => showError("Произошла ошибка, данных нет!"));
    }
  });
};
