const root = "/WSOA3028A_2592997"

const menuItems = [
    { name: "Home", href: `${root}/index.html` },  
    { name: "Blogs", href: `${root}/Blogs/index.html` },
    { name: "Essays", href: `${root}/Essays/EssayIndex.html` },
    { name: "Portfolio", href: `${root}/PortfolioFolder/index.html` },
    { name: "Design", href: `${root}/DesignFolder/index.html` },
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