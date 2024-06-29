document.addEventListener('DOMContentLoaded', () => {
    const fantasma = document.querySelector('.small-fantasma img');
    fantasma.addEventListener('click', () => {
        comerFantasma(fantasma);
    });
});

function comerFantasma(fantasma) {
    const comecocos = document.querySelector('.comecocos img');
    const rectFantasma = fantasma.getBoundingClientRect();
    const rectComecocos = comecocos.getBoundingClientRect();
    
    // Calculate the offset positions for comecocos
    const offsetX = rectFantasma.left - rectComecocos.left;
    const offsetY = rectFantasma.top - rectComecocos.top;

    // Move comecocos to the position of the ghost
    comecocos.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    // Hide the ghost after the transition
    setTimeout(() => {
        fantasma.style.visibility = 'hidden';
    }, 1000);
}