import { Imc } from "./imc.js";
import { Modal } from "./modal.js";

export function verifyNumber(value) {
  return isNaN(value) || value == "";
}

export function resetValues() {
  Imc.height.value = "";
  Imc.weight.value = "";
}

export function displayResultMessage() {
  Modal.open();
  Modal.showIMC();
  resetValues();
}