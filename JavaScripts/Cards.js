const cardClass = 'cardClass';
const cards = document.getElementsByClassName(cardClass);
const cardsArray = Array.from(cards);

array.forEach(cards => {
    cards.onmouseover = function(){
        MakeBigger(cards)
    };
});

function MakeBigger(ActiveCard){
    ActiveCard.style.height = "32px";
}
