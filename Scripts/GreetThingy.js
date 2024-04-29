function displayGreeting() 
{
    var name = document.getElementById("nameInput").value;
    var greeting = document.getElementById("greeting");
    greeting.textContent = "XSE " + name + ", this is Amro. Welcome to my website. If you didn't bring food go away";
}