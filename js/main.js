// onclick="startMusic();angelChat();incChat()
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

btn1.addEventListener("click", startMusic);
btn1.addEventListener("click", incChat);
btn1.addEventListener("click", angelChat);

btn2.addEventListener("click", startMusic);
btn2.addEventListener("click", incChat);
btn2.addEventListener("click", angelChat);

function startMusic() {
    var audio = document.getElementById('audio');
    audio.play();
}

const talkAngel = [
    `You've come to the Void, my Child.`,
    `The Void is the place, where every human being comes, when it dies.`
]
var chatNumber = 0;

var i = 0;
function angelChat() {
    var text = talkAngel[chatNumber];
    console.log(text);
    var speed = 80;

    if (i < text.length){
        document.getElementById('angelBox').innerHTML += text.charAt(i);
        i++;
        setTimeout(angelChat, speed);
    }
}

function incChat() {
    console.log(chatNumber);
    chatNumber++;
}