document.addEventListener('DOMContentLoaded', () => {
    const comecocos = document.querySelector('.comecocos img');
    const scoreBoard = document.getElementById('score-board');
    let score = 0;
    let ghostCounter = 0;

    function updateScore(points) {
        score += points;
        scoreBoard.textContent = score.toString().padStart(4, '0');
        if (score >= 5000) {
            alert('Game Over');
            window.location.reload(); 
        }
    }

    function comerFantasma(fantasma) {
        const rectFantasma = fantasma.getBoundingClientRect();
        const rectComecocos = comecocos.getBoundingClientRect();

        const offsetX = rectFantasma.left - rectComecocos.left;
        const offsetY = rectFantasma.top - rectComecocos.top;

        comecocos.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        setTimeout(() => {
            comecocos.style.transition = 'none';
            comecocos.style.transform = 'translate(0, 0)';
            comecocos.style.left = `${rectFantasma.left}px`;
            comecocos.style.top = `${rectFantasma.top}px`;
            setTimeout(() => {
                comecocos.style.transition = 'transform 1s ease';
            }, 50);
            fantasma.remove();
            updateScore(100);
            ghostCounter++;
            if (ghostCounter % 3 === 0) {
                spawnCherry();
            }
        }, 1000);
    }

    function comerCherry(cherry) {
        const rectCherry = cherry.getBoundingClientRect();
        const rectComecocos = comecocos.getBoundingClientRect();

        const offsetX = rectCherry.left - rectComecocos.left;
        const offsetY = rectCherry.top - rectComecocos.top;

        comecocos.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        setTimeout(() => {
            comecocos.style.transition = 'none';
            comecocos.style.transform = 'translate(0, 0)';
            comecocos.style.left = `${rectCherry.left}px`;
            comecocos.style.top = `${rectCherry.top}px`;
            setTimeout(() => {
                comecocos.style.transition = 'transform 1s ease';
            }, 50);
            cherry.remove();
            updateScore(500);
        }, 1000);
    }

    function spawnFantasma() {
        const fantasma = document.createElement('img');
        fantasma.src = './img/fantasmito.png';
        fantasma.alt = 'Fantasma';
        fantasma.className = 'fantasma';
        fantasma.style.left = `${Math.random() * window.innerWidth}px`;
        fantasma.style.top = `${Math.random() * window.innerHeight}px`;
        document.body.appendChild(fantasma);

        fantasma.addEventListener('click', () => comerFantasma(fantasma));
    }

    function spawnCherry() {
        const cherry = document.createElement('img');
        cherry.src = './img/cherry.png';
        cherry.alt = 'Cherry';
        cherry.className = 'cherry';
        cherry.style.left = `${Math.random() * window.innerWidth}px`;
        cherry.style.top = `${Math.random() * window.innerHeight}px`;
        document.body.appendChild(cherry);

        cherry.addEventListener('click', () => comerCherry(cherry));
    }

    setInterval(spawnFantasma, 2000);
});