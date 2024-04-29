const root = "/WSOA3028A_2592997"

const menuItems = [
    { name: "Home", href: "/WSOA3028A_2592997/index.html" },    
    { name: "Blogs", href: "/Blogs/index.html" },
    { name: "Essays", href: "/WSOA3028A_2592997/Essays/EssayIndex.html" },
    { name: "Portfolio", href: "/WSOA3028A_2592997/PortfolioFolder/index.html" },
    { name: "Design", href: "/WSOA3028A_2592997/DesignFolder/index.html" },
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