const cardClass = 'cardClass';
const cards = document.getElementsByClassName(cardClass);

for(let f = 0; f < cards.length; f++){
    f.addEventListener("click", clickedOnCard[f]);
}




for(let i = 0; i < cards.length; i++){
    if (cards[i].addEventListener(mouseover = function(){
        makeBigger(i);
        for(let j = 0; j < cards.length; j++){
            if (j == i){
                continue;
            }
            else{
                makeSmaller(j);
            }
        } 
    }));
}

function makeBigger(activeCard){
    activeCard.style.height = "105%";
    console.log("its on");
}

function makeSmaller(inactiveCard){
    inactiveCard.style.height = "95%";
}

function clickedOnCard(clickedCard){
    console.log("Clicked on");
}

