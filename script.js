// Load all the sound files
const bellSound = new Audio('/sounds/bell.wav');
const drumSound = new Audio('/sounds/drum.wav');
const popSound = new Audio('/sounds/pop.wav');
const clickSound = new Audio('/sounds/click.wav');
const losing = new Audio('/sounds/Losing.wav');
const cat = new Audio('/sounds/Cat.wav');

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
    losing.play();
});
document.getElementById('cat').addEventListener('click', () => {
    cat.play();
});
