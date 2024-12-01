function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const body = document.body;
const changeColorButton = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

changeColorButton.addEventListener("click", () => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    colorText.textContent = color;
})