window.addEventListener('DOMContentLoaded', (event) => {
    randomizeColors();
});

function randomizeColors() {
    console.log("Randomizing colors for blocks");
    var blocks = document.querySelectorAll('.block');

    for (var t = 0; t < blocks.length; t++) {
        var hue = randomNumber(360);
        var saturation = 100;
        var lightness = 75;

        blocks[t].style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
}

function randomNumber(maximum) {
    return Math.floor(Math.random() * maximum+1);
}