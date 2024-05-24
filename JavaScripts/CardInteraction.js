document.addEventListener("DOMContentLoaded", function() {
    const cardClass = 'cardClass';
    const cards = document.getElementsByClassName(cardClass);

    for (let f = 0; f < cards.length; f++) {
        cards[f].addEventListener("click", clickedOnCard);
    }

    function clickedOnCard(event) {
        const clickedCard = event.currentTarget;
        const url = clickedCard.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    }
}); 