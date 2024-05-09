const root = "/WSOA3028A_2592997";

const menuItems = [
    { name: "Home", href: `${root}/index.html` },
    { name: "Profile", href: `${root}/profile/index.html` },
    { name: "Blogs", href: `${root}/blogs/index.html` },
    { name: "Design", href: `${root}/design/index.html` },
    { name: "Essays", href: `${root}/essays/index.html` },
    { name: "Portfolio", href: `${root}/portfolio/index.html` }
];


export function initialise(currentPage) {
    const nav = document.querySelector("header > nav")       
    const ul = document.createElement("ul")                  
    for (let menuItem of menuItems) {                        
        const li = document.createElement("li")              
        if (currentPage != menuItem.name) {                  
            const a = document.createElement("a")            
            a.innerText = menuItem.name                    
            a.setAttribute("href", menuItem.href)                
            li.appendChild(a)                                
        } else { li.innerText = menuItem.name }
        ul.appendChild(li)                                   
    }
    nav.appendChild(ul)                                     
}   
