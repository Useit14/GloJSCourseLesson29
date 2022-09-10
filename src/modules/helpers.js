export const debounce = (func, ms = 300) => {
  let timer;
  return (...args) => {
    timer = setTimeout(() => {
      clearTimeout(timer);
      func.apply(this, args);
    }, ms);
  };
};

export const showError = (msg) => {
  const statusBlock = document.createElement("div");
  const table = document.querySelector("table");
  let idTimer = 0;

  statusBlock.textContent = msg;
  table.after(statusBlock);
  idTimer = setTimeout(() => {
    statusBlock.style.display = "none";
  }, 3000);
};
