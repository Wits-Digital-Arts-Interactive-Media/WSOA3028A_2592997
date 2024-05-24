const cardClass = 'cardClass';
const cards = document.getElementsByClassName(cardClass);

for(let f = 0; f < cards.length; f++){
    f.addEventListener("click", clickedOnCard[f]);
}


function clickedOnCard(clickedCard){
    console.log("Clicked on");
}

