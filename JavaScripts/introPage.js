const bodyText = document.getElementById("bodyText");
const Page = document.getElementById("startupPage");

// Check if 'visited' flag is set in localStorage
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

// Global variable to track if beforeunload should be disabled
let disableBeforeUnload = false;

// Check if the clicked link is internal or a card with data-url and set disableBeforeUnload accordingly
document.addEventListener('click', function(event) {
    const targetElement = event.target.closest('a');
    if (targetElement && targetElement.href.startsWith(window.location.origin)) {
        // Internal link clicked, disable beforeunload
        disableBeforeUnload = true;
    } else {
        // Check if a card was clicked (assuming all cards have data-url attributes)
        const clickedOnCard = Array.from(document.getElementsByClassName('cardClass'))
                                  .some(card => card.contains(event.target));

        if (clickedOnCard) {
            // Card clicked, disable beforeunload
            disableBeforeUnload = true;
        }
    }
});

// Add beforeunload event listener with conditional behavior
window.addEventListener('beforeunload', function(event) {
    if (!disableBeforeUnload) {
        localStorage.setItem('visited', 'false');
        console.log("The 'visited' flag was reset");
    }
});

