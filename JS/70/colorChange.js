let intervalId;
let isRunning = false;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColors() {
    const bgColor = getRandomColor();
    const textColor = getRandomColor();
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
}

document.getElementById('toggleButton').addEventListener('click', function () {
    if (isRunning) {
        clearInterval(intervalId);
        this.textContent = 'Start';
    } else {
        intervalId = setInterval(changeColors, 1000);
        this.textContent = 'Stop';
    }
    isRunning = !isRunning;
});