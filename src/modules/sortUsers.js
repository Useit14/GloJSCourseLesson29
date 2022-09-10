import { render } from "./render";
import { showError } from "./helpers";

export const sortUsers = () => {
  const headerSortIsChildren = document.getElementById("sort-is-children");
  headerSortIsChildren.style.cursor = "pointer";
  let isSort = false;
  headerSortIsChildren.addEventListener("click", () => {
    window.userService
      .getData("http://localhost:4545/users", {
        sort: "children",
        order: isSort ? "asc" : "desc",
      })
      .then((users) => render(users))
      .catch(() => showError("Произошла ошибка, данных нет!"));
    isSort = !isSort;
  });
};
