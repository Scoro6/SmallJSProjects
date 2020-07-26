const button = document.querySelector("button");
const decimalInput = document.querySelector("#decimal");
const input = document.getElementById("binary");

input.addEventListener("keyup", function (e) {
  if (e.key !== "0" && e.key !== "1" && e.key !== "Enter") {
    const binary = document.querySelector("#binary").value;
    const newBinary = binary.slice(0, binary.length - 1);
    this.value = newBinary;
  }
});

button.addEventListener("click", () => {
  convert();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convert();
  }
});

function convert() {
  const binary = document.querySelector("#binary").value; // this return a string
  const len = binary.length; //string length
  let counter = 0; //counting the places so that we can raise the corresponding power of 2
  let decimal = 0; //storing the decimal output
  for (let i = len - 1; i >= 0; i--) {
    decimal += binary[i] * Math.pow(2, counter);
    counter++;
  }
  decimalInput.value = decimal;
}
