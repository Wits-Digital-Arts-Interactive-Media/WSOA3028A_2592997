const menuItems = [
    { name: "Home", href: "/index.html" },
    { name: "Blog Posts", href: "/Blogs/index.html" },
    { name: "Essay", href: `/Essays/EssayIndex.html` },
    { name: "Portfolio", href: `/PortfolioFolder/index.html` },
    { name: "Design", href: `/DesignFolder/index.html` },
]

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
