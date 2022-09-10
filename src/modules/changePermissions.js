import { render } from "./render";
import { showError } from "./helpers";

export const changePermissions = () => {
  const tbody = document.querySelector("#table-body");
  tbody.addEventListener("click", (event) => {
    if (event.target.closest("input[type=checkbox]")) {
      const tr = event.target.closest("tr");
      const input = tr.querySelector("input[type=checkbox]");
      const id = tr.dataset.key;
      window.userService
        .sendData("http://localhost:4545/users", {
          method: "PATCH",
          id: id,
          body: { permissions: input.checked },
        })
        .then((response) => {
          window.userService
            .getData("http://localhost:4545/users")
            .then((users) => render(users))
            .catch(() => showError("Произошла ошибка, данных нет!"));
        })
        .catch(() => showError("Произошла ошибка, данных нет!"));
    }
  });
};
