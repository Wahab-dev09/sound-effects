// Load all the sound files
const bellSound = new Audio('/bell.wav');
const drumSound = new Audio('/drum.wav');
const popSound = new Audio('/pop.wav');
const clickSound = new Audio('/click.wav');
const losing = new Audio('/Losing.wav');
const cat = new Audio('/Cat.wav');

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
