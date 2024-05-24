const cardClass = 'cardClass';
const cards = document.getElementsByClassName(cardClass);

for(let i = 0; i < cards.length; i++){
    if (cards[i].onmouseover = function(){
        MakeBigger(i)
    });
}

function MakeBigger(ActiveCard){
    ActiveCard.style.height = "32px";
    console.log("its on");
}
