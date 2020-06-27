const inputs = document.querySelectorAll('input[type="number"]');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", (e) => {
    console.log(e.target);
  });
}
