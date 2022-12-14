export class UserService {
  async getData(url, option) {
    return await fetch(
      `${url}/${option?.id ? option?.id : ""}${
        option?.filter ? "?" + option?.filter + "=true" : ""
      }${
        option?.sort
          ? "?_sort=" + option?.sort + "&_order=" + option?.order
          : ""
      }${option?.search ? "?name_like=" + option?.search : ""}`
    ).then((response) => response.json());
  }

  async sendData(url, option) {
    return await fetch(`${url}/${option.id ? option.id : ""}`, {
      method: option.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(option.body),
    }).then((response) => response.json());
  }
}
