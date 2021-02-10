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

btn1.addEventListener("click", nextAnswer);
btn1.addEventListener("click", nextQuestion);

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
        angel: `I am not an angel of death. This is something, I can not tell you. I am very sorry. However, I can tell you, how to move on. How to Accept death
        and be a part of this Void. Would you like to hear this?`,
        question1: `I... I think yes, help me`,
        question2: `If this is the case, I have no choices`
    },
    {
        angel: `Good, this is the first step to not become insane. Some poor souls never admitted, that they are dead. So they went mad, and are trapped in their
        own prison of Mind. They think, they are alive, and try to talk with there relatives. However, no one hears them. Those who do not accept death, can not
        achieve a pure afterlife`,
        question1: `Do they feel pain?`,
        question2: `This sounds kind horrible`
    },
    {
        angel: `It is cruel, and they feel psychological pain. But I did not made the rules, neither do I can change them. And even if I Could, i wouldn't. To 
        accept your fate, is one of the most important things. You have to realize, in what situation you are now, just like in your lifetime. Everyone has a
        certain path to follow in their live, and sadly some Lives end earlier than others. But let us move on...<br>The Second step, is to remember your loved
        ones, yes this sounds hard, but to remember who were the most important people in your lifetime, and accept that you will never see them again, will make
        the difference between you and the lost one.`,
        question1: `Yes, I remember them`,
        question2: `I could never forget the one, that believed in me`
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