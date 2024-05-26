window.onload = function() {
    localStorage.setItem('visited', 'false'); // Reset 'visited' flag to 'false' on every page load
};

const Page = document.getElementById("startupPage");

console.log("localStorage.getItem('visited'):", localStorage.getItem('visited'));

if (localStorage.getItem('visited') !== 'true') {
    console.log("its false");
    Page.style.display = 'flex';  
    Page.addEventListener("click", start);
} else {
    Page.style.display = 'none';
    console.log("its true");
}

function start(event){    
    Page.style.opacity = 0;    
    Page.addEventListener('transitionend', () => {
        console.log("Transitioned");
        Page.parentNode.removeChild(Page);
        localStorage.setItem('visited', 'true');
    });
}
