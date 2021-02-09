function startMusic() {
    var audio = document.getElementById('audio');
    audio.play();
}

var i = 0;

function typeEffect() {
    var text = "You've come to the Void, my Child.";
    var speed = 80;

    if (i < text.length){
        document.getElementById('angelBox').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}