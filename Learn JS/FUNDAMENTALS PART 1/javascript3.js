let balloon = document.getElementById('balloon');
let currentFont = 20;
balloon.style.fontSize = `${currentFont}px`;

function balloonUp(event) {
    if (event.code === 'ArrowUp') {
        currentFont += 10;
        if (currentFont >= 100) {
            balloon.textContent = '💥';
            document.removeEventListener('keydown', balloonUp);
        }
        balloon.style.fontSize = `${currentFont}px`;
    } else if (event.code === 'ArrowDown') {
        currentFont -= 10;
        if (currentFont < 10) {
            currentFont = 10;
        } else {
            balloon.style.fontSize = `${currentFont}px`;
        }
    } else {
        balloon.style.fontSize = '20px';
    }
}

document.addEventListener('keydown', balloonUp);