// Load all the sound files
const bellSound = new Audio('/sound-effects/sounds/bell.wav');
const drumSound = new Audio('/sound-effects/sounds/drum.wav');
const popSound = new Audio('/sound-effects/sounds/pop.wav');
const clickSound = new Audio('/sound-effects/sounds/click.wav');
const losingSound = new Audio('/sound-effects/sounds/Losing.wav');
const catSound = new Audio('/sound-effects/sounds/Cat.wav');

// Add event listeners to buttons and play respective sounds
document.getElementById('bell').addEventListener('click', () => {
    bellSound.play();
});

document.getElementById('drum').addEventListener('click', () => {
    drumSound.play();
});

document.getElementById('pop').addEventListener('click', () => {
    popSound.play();
});

document.getElementById('click').addEventListener('click', () => {
    clickSound.play();
});
document.getElementById('losing').addEventListener('click', () => {
    losingSound.play();
});
document.getElementById('cat').addEventListener('click', () => {
    catSound.play();
});
