export const Imc = {
  weight: document.querySelector("#weight"),
  height: document.querySelector("#height"),

  calcIMC() {
    const weight = Imc.weight.value;
    const height = Imc.height.value;

    const IMC = (weight / (height / 100) ** 2).toFixed(2);

    return IMC;
  },
};
