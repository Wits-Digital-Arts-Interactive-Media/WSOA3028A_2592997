const cardClass = 'cardClass';
const cards = document.getElementsByClassName(cardClass);

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
    activeCard.style.height = "32px";
    console.log("its on");
}

function makeSmaller(inactiveCard){
    inactiveCard.style.height = "16px";
}

