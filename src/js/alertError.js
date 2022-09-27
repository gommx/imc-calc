import { Imc } from "./imc.js";

export const AlertError = {
  message: document.querySelector(".alert-error"),

  open() {
    AlertError.message.classList.add("open");
  },
  close() {
    AlertError.message.classList.remove("open");
  },
};

Imc.height.oninput = () => AlertError.close();
Imc.weight.oninput = () => AlertError.close();
