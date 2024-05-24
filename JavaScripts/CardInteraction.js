const cardClass = 'cardClass';
const cards = document.getElementsByClassName(cardClass);



for (let f = 0; f < cards.length; f++) {
    cards[f].addEventListener("click", clickedOnCard);
}

function clickedOnCard(event) {
    console.log("Clicked on");
}