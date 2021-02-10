// onclick="startMusic();angelChat();incChat()
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btnStart = document.getElementById('btnStart');
var angelBox = document.getElementById('angelBox');

btnStart.addEventListener("click", startMusic);
btnStart.addEventListener("click", nextAnswer);
btnStart.addEventListener("click", nextQuestion);
btnStart.addEventListener("click", btnQShow);
btnStart.addEventListener("click", btnStartDisable);

function btnQShow () {
    document.getElementById('divChat').style.display = "flex";
}

function btnStartDisable() {
    btnStart.style.display = "none";
}

btn1.addEventListener("click", startMusic);
btn1.addEventListener("click", nextAnswer);
btn1.addEventListener("click", nextQuestion);

btn2.addEventListener("click", startMusic);
btn2.addEventListener("click", nextAnswer);
btn2.addEventListener("click", nextQuestion);

function startMusic() {
    var audio = document.getElementById('audio');
    audio.play();
}

const dialogue = [
    {
        angel: `You've come to the Void, my Child`,
        question1: `Where?`,
        question2: `Tell me about the Void`
    },
    {
        angel: `The Void is the place, where every human being comes, when it dies`,
        question1: `I am, dead?`,
        question2: `Dead?`
    },
    {
        angel: `Yes, you are dead, i am so sry little one`,
        question1: `How did I die`,
        question2: `I don't remember anything`
    },
    {
        angel: ``,
        question1: ``,
        question2: ``
    },
]

//  angel voice lines
var voiceLine = 0;
function nextAnswer() {
    angelBox.innerHTML = dialogue[voiceLine].angel;
    voiceLine++;
}


//  questions
var question = 0;
function nextQuestion() {
    btn1.innerHTML = dialogue[question].question1;
    btn2.innerHTML = dialogue[question].question2;
    question++;
}