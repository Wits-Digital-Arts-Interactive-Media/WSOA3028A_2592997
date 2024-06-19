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
const elements = document.getElementsByClassName("cardClass");
const cards = Array.from(elements);

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

    hideButton.addEventListener('click', function(){
        const footer = document.getElementById('theFooter');
        footer.style.bottom = '-80px';
    });

    for (let i = 0; i < options.length; i++){
        const li = document.createElement("li");        
        const a = document.createElement("a");
        a.innerText = options[i].name;
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
}

function darkMode(){
    document.body.style.backgroundColor = 'rgb(58, 58, 58)';
    darkModeActive = true;
    for (let i = 0; i < selectedElements.length; i++){
        selectedElements[i].element.style.backgroundColor = 'rgb(58, 58, 58)';
    };
    
    for (let f = 0; f < cards.length; f++){
        cards[f].style.backgroundColor = 'rgb(99, 99, 99)';
    }

    const footer = document.getElementById("footerBar");
    footer.style.backgroundColor = 'rgb(99, 99, 99)';

    const darkModeContainer = document.getElementById("toggleBackground");
    darkModeContainer.style.backgroundColor = 'rgb(77, 77, 77)';

    const darkModeButton = document.getElementById("toggleSwitch");
    darkModeButton.style.backgroundColor = 'black';
}

function lightMode(){
    document.body.style.backgroundColor = 'white';
    darkModeActive = false;
    for (let i = 0; i < selectedElements.length; i++){
        selectedElements[i].element.style.backgroundColor = 'white';
    }

    for (let f = 0; f < cards.length; f++){
        cards[f].style.backgroundColor = 'rgb(228, 228, 228)';
    }

    const footer = document.getElementById("footerBar");
    footer.style.backgroundColor = 'rgb(228, 228, 228)';

    const darkModeContainer = document.getElementById("toggleBackground");
    darkModeContainer.style.backgroundColor = 'rgb(243, 243, 243)';

    const darkModeButton = document.getElementById("toggleSwitch");
    darkModeButton.style.backgroundColor = 'rgb(243, 243, 243)';
}
