import { AlertError } from "./alertError.js";
import { Imc } from "./imc.js";
import { verifyNumber, displayResultMessage } from "./utils.js";

const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();

  const weightOrHeightIsNotANumber =
    verifyNumber(Imc.weight.value) || verifyNumber(Imc.height.value);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  displayResultMessage();
};

