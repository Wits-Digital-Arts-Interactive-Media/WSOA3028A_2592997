const Blog1 = document.getElementById("week1Text");

Blog1.addEventListener("mouseover", changeText);
Blog1.addEventListener("mouseleave", revertText);


function changeText(event) {
    const blogBox = event.currentTarget;
    const previousText = blogBox.textContent;
    blogBox.textContent ="It should work now";
}

function revertText(event){
    blogBox.textContent = previousText;
}