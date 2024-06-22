const gameTexts = document.getElementsByClassName("ChangableText");
const toTexts = ["Nothing here yet. Go home?"];
const backTexts = ["Nothing here yet. Go home?"];


for(let i= 0; i < gameTexts.length; i++){
    gameTexts[i].setAttribute('data-index', i);
    gameTexts[i].addEventListener("mouseover", changeText);
    gameTexts[i].addEventListener("mouseleave", revertText);
}

function changeText(event) {
    const gameBox = event.currentTarget;
    const index = gameBox.getAttribute('data-index');
    gameBox.textContent = toTexts[index];    
}

function revertText(event){
    const gameBox = event.currentTarget;
    const index = gameBox.getAttribute('data-index');
    gameBox.textContent = backTexts[index];
}


