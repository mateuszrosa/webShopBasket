const inputs = document.querySelectorAll('input[type="number"]');
const sum = document.querySelector("span.font-bold");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", (e) => {
    console.log(sum.textContent);
  });
}
