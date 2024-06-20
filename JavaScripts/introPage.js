const bodyText = document.getElementById("bodyText");
const Page = document.getElementById("startupPage");

if (localStorage.getItem('visited') === 'true') {
    Page.style.display = 'none';    
} else {
    Page.style.display = 'flex';  
    Page.addEventListener("click", start);
}

function start(event) {    
    Page.style.opacity = 0;     
    Page.addEventListener('transitionend', () => {
        localStorage.setItem('visited', 'true');
        bodyText.style.overflow = 'auto';
        Page.style.display = 'none'; 
    });
}


let disableBeforeUnload = false;

document.addEventListener('click', function(event) {
    const targetElement = event.target.closest('a');
    if (targetElement && targetElement.href.startsWith(window.location.origin)) {
        disableBeforeUnload = true;
    }
});


window.addEventListener('beforeunload', function(event) {
    if (!disableBeforeUnload) {
        localStorage.setItem('visited', 'false');
        console.log("The 'visited' flag was reset");
    }
});
