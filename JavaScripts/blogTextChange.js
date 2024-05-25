const blogTexts = document.getElementsByClassName("changableText");
const toTexts = ["Imagining the Internet","Interaction and the www","Interaction Design for the Web","The IxD Process / Headers and Microformats","The Ethics of UI & UX Practice","Internet, Society and Design Justice"," The World in www","Digital Inequalities"];
const backTexts = ["Week 1","Week 2","Week 3","Week 4","Week 6","Week 8","Week 9","Week 10"];

for(let i= 0; i < blogTexts.length; i++){
    blogTexts[i].setAttribute('data-index', i);
    blogTexts[i].addEventListener("mouseover", changeText);
    blogTexts[i].addEventListener("mouseleave", revertText);
}


console.log(blogTexts);
function changeText(event) {
    const blogBox = event.currentTarget;
    const index = blogBox.getAttribute('data-index');
    blogBox.textContent = toTexts[index];
}

function revertText(event){
    const blogBox = event.currentTarget;
    const index = blogBox.getAttribute('data-index');
    blogBox.textContent = backTexts[index];
}