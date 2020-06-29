const inputs = document.querySelectorAll('input[type="number"]');
const sum = document.querySelector("span.font-bold");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", (e) => {
    sum.textContent = "";
    inputs.forEach((input) => {
      const price = input.parentNode.nextElementSibling.textContent.replace(
        /[^0-9]/g,
        ""
      );
      const value = input.value;
    });
  });
}
