import { render } from "./render";
import { showError } from "./helpers";

export const filterUsers = () => {
  const btnIsChildren = document.getElementById("btn-isChildren");
  const btnIsPermissions = document.getElementById("btn-isPermissions");
  const btnIsAll = document.getElementById("btn-isAll");

  btnIsChildren.addEventListener("click", () => {
    window.userService
      .getData("http://localhost:4545/users", { filter: "children" })
      .then((users) => {
        render(users);
      })
      .catch(() => showError("Произошла ошибка, данных нет!"));
  });
  btnIsPermissions.addEventListener("click", () => {
    window.userService
      .getData("http://localhost:4545/users", { filter: "permissions" })
      .then((users) => {
        render(users);
      })
      .catch(() => showError("Произошла ошибка, данных нет!"));
  });
  btnIsAll.addEventListener("click", () => {
    window.userService
      .getData("http://localhost:4545/users")
      .then((users) => {
        render(users);
      })
      .catch(() => showError("Произошла ошибка, данных нет!"));
  });
};
