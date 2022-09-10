import { render } from "./render";
import { showError } from "./helpers";

export const removeUsers = () => {
  const tbody = document.querySelector("#table-body");
  tbody.addEventListener("click", (event) => {
    if (event.target.closest(".btn-remove")) {
      const tr = event.target.closest("tr");
      const id = tr.dataset.key;
      window.userService
        .sendData("http://localhost:4545/users", { method: "DELETE", id: id })
        .then((response) =>
          userService
            .getData("http://localhost:4545/users")
            .then((users) => render(users))
            .catch(() => showError("Произошла ошибка, данных нет!"))
        )
        .catch(() => showError("Произошла ошибка, данных нет!"));
    }
  });
};
