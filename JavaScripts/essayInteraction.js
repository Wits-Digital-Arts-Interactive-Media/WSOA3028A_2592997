const essayTexts = document.getElementsByClassName("essayChangableText");
const toTexts = ["Ethical UI & UX"];
const backTexts = ["Essay 1"];


for(let i= 0; i < essayTexts.length; i++){
    essayTexts[i].setAttribute('data-index', i);
    essayTexts[i].addEventListener("mouseover", changeText);
    essayTexts[i].addEventListener("mouseleave", revertText);
}

function changeText(event) {
    const essayBox = event.currentTarget;
    const index = essayBox.getAttribute('data-index');
    essayBox.textContent = toTexts[index];    
}

function revertText(event){
    const essayBox = event.currentTarget;
    const index = essayBox.getAttribute('data-index');
    essayBox.textContent = backTexts[index];
}
