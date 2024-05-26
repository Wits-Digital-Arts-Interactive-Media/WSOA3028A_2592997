document.addEventListener("DOMContentLoaded", function() {
    const selectableClass = "selectable";
    const options = document.getElementsByClassName(selectableClass);
    

for(let i=0; i < options.length; i++){
    options[i].addEventListener("click", clickedOnCard);
    
}

function clickedOnCard(event){
    const clickedOnCard = event.currentTarget;
    const url = clickedOnCard.getAttribute('data-url');
    console.log(url);
    if (url){
        window.location.href = url;
    }
}});


