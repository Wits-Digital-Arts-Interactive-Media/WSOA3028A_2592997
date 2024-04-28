const root = "/WSOA3028A_2592997"

const menuItems = [
    { name: "Home", href: `${root}/index.html` },    
    { name: "Blog", href: `${root}/Blogs/Index.html` },
    { name: "Essays", href: `${root}/essays/index.html` },
    { name: "Portfolio", href: `${root}/portfolio/index.html` },
    //{ name: "Design", href: `${root}/design/index.html` },
]
export function initialise(currentPage) {
    console.log("it should work")
    const nav = document.querySelector("header > nav")       //nav is when you use links so this is getting it from the first header it finds
    const ul = document.createElement("ul")                  // ul is unordered list so this is creating it
    for (let menuItem of menuItems) {                        //basically for loop assigning each item in  menuItems to menuItem for each iteration
        const li = document.createElement("li")              //creates a list item 
        if (currentPage != menuItem.name) {                  //compares the names of the current page and the name of the menuitem page
            const a = document.createElement("a")            //a tag is for hyperlinks basically that href thing
            a.innerText = menuItem.name                      //this is the word that comes highlighted in blue
            a.setAttribute("href", menuItem.href)            //no clue what this does    
            li.appendChild(a)                                //this adds it as a child of the li object we made
        } else { li.innerText = menuItem.name }
        ul.appendChild(li)                                   //adds it to the unordered list we made at the beginning
    }
    nav.appendChild(ul)                                     
}