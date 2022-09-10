import { render } from "./render";
import { debounce } from "./helpers";
import { showError } from "./helpers";

export const searchUsers = () => {
  const input = document.getElementById("search-input");

  const debounceSearch = debounce(() => {
    window.userService
      .getData("http://localhost:4545/users", { search: input.value })
      .then((users) => render(users))
      .catch(() => showError("Произошла ошибка, данных нет!"));
  }, 500);

  input.addEventListener("input", debounceSearch);
};
