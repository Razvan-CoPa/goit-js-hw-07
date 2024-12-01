const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");
let size = 30;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const elements = [];
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.margin = "5px";
        elements.push(box);
        size += 10;
    }
    boxContainer.append(...elements);
}

function destroyBoxes() {
    boxContainer.innerHTML = "";
    size = 30;
}

createButton.addEventListener("click", () => {
    const amount = parseInt(input.value);
    if (isNaN(amount) || amount < 1 || amount > 100) {
        alert("Only numbers between 1 and 100 are allowed!");
        return;
    }
    createBoxes(amount);
    input.value = "";
})

destroyButton.addEventListener("click", destroyBoxes);