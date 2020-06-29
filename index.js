const inputs = document.querySelectorAll('input[type="number"]');
const result = document.querySelector("span.font-bold");
let sum = 0;

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", (e) => {
    sum = 0;
    result.textContent = "";
    inputs.forEach((input) => {
      const price = input.parentNode.nextElementSibling.textContent.replace(
        /[^0-9]/g,
        ""
      );
      const value = input.value;
      sum += price * value;
      result.textContent = `${sum} zł`;
    });
  });
}
