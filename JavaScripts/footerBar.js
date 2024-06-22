const options = [
    //{name : "home", href:`/WSOA3028A_2592997/index.html`},
    //{name : "test", href:`/WSOA3028A_2592997/index.html`},
    //{name : "hide", href:`/WSOA3028A_2592997/index.html`}
];

const selectedElements = [
    {element: document.body},
    {element: document.querySelector('#mainHeader')},
];

var darkModeActive = false; 

localStorage.getItem('footerBarActive');

const elements = document.getElementsByClassName("cardClass");
const cards = Array.from(elements);

const cardElements = document.getElementsByClassName("selectable");
const blogCards = Array.from(cardElements);

const portfolioContainer1 = document.getElementById("projectContainer1");
const portfolioContainer2 = document.getElementById("projectContainer2");

const downloadButton1 = document.getElementById("downloadButton1");
const downloadButton2 = document.getElementById("downloadButton2");

export function createFooter(){
    const nav = document.querySelector("body > footer > nav");
    const ul = document.createElement("ul");
    const bgli = document.createElement("li");
    const div = document.createElement("div");
    const button = document.createElement("button");
    div.id = "toggleBackground";
    button.id = "toggleSwitch";    
    button.style.position = 'relative';
    button.style.left = '0px';
    bgli.appendChild(div);
    div.appendChild(button);
    ul.appendChild(bgli);
    
    button.addEventListener('click', function() {
        if (darkModeActive == false){            
        const currentLeft = parseInt(button.style.left, 10);
        button.style.left = (currentLeft + 23) + 'px';
        darkMode();
        }
        else{ 
            const currentLeft = parseInt(button.style.left, 10);
                button.style.left = (currentLeft - 23) + 'px';
                lightMode();
        }
    });

    const hideButtonLi = document.createElement("li");
    const hideButton = document.createElement("button");
    hideButton.id = "hideContainer";
    hideButton.innerText = "Hide";
    hideButtonLi.appendChild(hideButton);
    ul.appendChild(hideButtonLi);


    hideButton.addEventListener('click', function() {
        localStorage.setItem('footerBarActive', 'false');
        const footerBar = document.getElementById('footerBar');
        const childElements = footerBar.children;
        Array.from(childElements).forEach(function(child) {
            child.style.opacity = 0;
            child.style.width = '0px';
            child.style.height = '0px';
            child.disabled = true; 
            child.style.pointerEvents = 'none'; 
        });
        footerBar.style.animation = 'hideFooter 0.5s forwards';

        footerBar.addEventListener('animationend', function(event) {
            if (event.animationName === 'hideFooter') {
                footerBar.addEventListener('click', resetFooter);
            }
        });
        
    });

    hideButton.addEventListener('click', function() {
        console.log('Button clicked!');
    });

    for (let i = 0; i < options.length; i++){
        const li = document.createElement("li");        
        const a = document.createElement("a");
        a.innerText = options[i].name;
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);

    //Dark Mode Checker 888888888888888888888888888

    if (localStorage.getItem('darkModeOn') == 'true'){
        darkMode();
        const currentLeft = parseInt(button.style.left, 10);
        button.style.left = (currentLeft + 23) + 'px';

              
    }

    //Footer Mode Checker 888888888888888888888888888

    if (localStorage.getItem('footerBarActive') == 'false'){
        const footerBar = document.getElementById('footerBar');
        const childElements = footerBar.children;
        Array.from(childElements).forEach(function(child) {
            child.style.opacity = 0;
            child.style.width = '0px';
            child.style.height = '0px';
            child.disabled = true; 
            child.style.pointerEvents = 'none'; 
        });
        footerBar.style.animation = 'hideFooter 0.5s forwards';

        footerBar.addEventListener('animationend', function(event) {
            if (event.animationName === 'hideFooter') {
                footerBar.addEventListener('click', resetFooter);
            }
        });
    }  
}

function darkMode(){
    if (localStorage.getItem('darkModeOn') == 'false'){
        localStorage.setItem('darkModeOn', 'true');
    }
    document.body.style.backgroundColor = 'rgb(58, 58, 58)';
    darkModeActive = 'true';
    const hideButton = document.getElementById("hideContainer");
    hideButton.style.backgroundColor = 'rgb(99, 99, 99)';
    for (let i = 0; i < selectedElements.length; i++){
        selectedElements[i].element.style.backgroundColor = 'rgb(58, 58, 58)';
    };
    
    for (let f = 0; f < cards.length; f++){
        cards[f].style.backgroundColor = 'rgb(99, 99, 99)';
    }

    for (let g = 0; g < blogCards.length; g++){
        blogCards[g].style.backgroundColor = 'rgb(99, 99, 99)';
    }

    if (portfolioContainer1 != null){
        portfolioContainer1.style.backgroundColor = 'rgb(99, 99, 99)';
    }

    if (portfolioContainer2 != null){
        portfolioContainer2.style.backgroundColor = 'rgb(99, 99, 99)';
    }

    if (downloadButton1 != null){
        downloadButton1.style.backgroundColor = 'rgb(99, 99, 99)';
    }

    if (downloadButton2 != null){
        downloadButton2.style.backgroundColor = 'rgb(99, 99, 99)';
    }

    const footer = document.getElementById("footerBar");
    footer.style.backgroundColor = 'rgb(99, 99, 99)';

    const darkModeContainer = document.getElementById("toggleBackground");
    darkModeContainer.style.backgroundColor = 'rgb(77, 77, 77)';

    const darkModeButton = document.getElementById("toggleSwitch");
    darkModeButton.style.backgroundColor = 'black';
}

function lightMode(){
    if (localStorage.getItem('darkModeOn') == 'true'){
        localStorage.setItem('darkModeOn', 'false');
    }
    document.body.style.backgroundColor = 'white';
    darkModeActive = false;
    for (let i = 0; i < selectedElements.length; i++){
        selectedElements[i].element.style.backgroundColor = 'white';
    }

    for (let f = 0; f < cards.length; f++){
        cards[f].style.backgroundColor = 'rgb(228, 228, 228)';
    }
    
    for (let g = 0; g < blogCards.length; g++){
        blogCards[g].style.backgroundColor = 'rgb(228, 228, 228)';
    }

    const hideButton = document.getElementById("hideContainer");
    hideButton.style.backgroundColor = 'rgb(228, 228, 228)';

    if (portfolioContainer1 != null){
        portfolioContainer1.style.backgroundColor = 'rgb(228, 228, 228)';
    }

    if (portfolioContainer2 != null){
        portfolioContainer2.style.backgroundColor = 'rgb(228, 228, 228)';
    }

    if (downloadButton1 != null){
        downloadButton1.style.backgroundColor = 'rgb(228, 228, 228)';
    }

    if (downloadButton2 != null){
        downloadButton2.style.backgroundColor = 'rgb(228, 228, 228)';
    }

    const footer = document.getElementById("footerBar");
    footer.style.backgroundColor = 'rgb(228, 228, 228)';

    const darkModeContainer = document.getElementById("toggleBackground");
    darkModeContainer.style.backgroundColor = 'rgb(243, 243, 243)';

    const darkModeButton = document.getElementById("toggleSwitch");
    darkModeButton.style.backgroundColor = 'rgb(243, 243, 243)';
}

function resetFooter(){
    const childElementsInactive = footerBar.children;
        Array.from(childElementsInactive).forEach(function(inactiveChild) {
            inactiveChild.style.opacity = 1;
            inactiveChild.style.width = '100%';
            inactiveChild.style.height = '100%';
            inactiveChild.disabled = false; 
            inactiveChild.style.pointerEvents = 'auto'; 
        });
    footerBar.style.animation = 'showFooter 0.5s forwards';
    footerBar.removeEventListener('click', resetFooter);
    localStorage.setItem('footerBarActive', 'true');
    const footer = document.getElementById("footerBar");
    if (darkModeActive == 'true'){
        footer.style.backgroundColor = 'rgb(99, 99, 99)';
    }
    else{
        footer.style.backgroundColor = 'rgb(228, 228, 228)';
    }
}