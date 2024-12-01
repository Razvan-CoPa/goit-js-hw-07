let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value === '') {
      nameOutput.textContent = 'Anonymus';
  } else {
      nameOutput.textContent = nameInput.value
  }
})