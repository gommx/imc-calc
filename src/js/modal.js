import { Imc } from "./imc.js";

export const Modal = {
  message: document.querySelector(".modal h2"),
  wrapper: document.querySelector(".modal-wrapper"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
  showIMC() {
    Modal.message.innerText = `Seu IMC é de \n${Imc.calcIMC()}`;
  },
};

Modal.buttonClose.onclick = () => {
  Modal.close();
};

window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.key === "Escape") {
    Modal.close();
  }
}
