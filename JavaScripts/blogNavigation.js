const blogPages = [
    {name: "Blog 1", href:`/WSOA3028A_2592997/Blogs/WeeklyBlogs/Week 1.html`},
    {name: "Blog 2", href:`/WSOA3028A_2592997/Blogs/WeeklyBlogs/Week 2.html`},
    {name: "Blog 3", href:`/WSOA3028A_2592997/Blogs/WeeklyBlogs/Week 3.html`},
    {name: "Blog 4", href:`/WSOA3028A_2592997/Blogs/WeeklyBlogs/Week 4.html`},
    {name: "Blog 6", href:`/WSOA3028A_2592997/Blogs/WeeklyBlogs/Week 6.html`},
    {name: "Blog 8", href:`/WSOA3028A_2592997/Blogs/WeeklyBlogs/Week 8.html`},
    {name: "Blog 9", href:`/WSOA3028A_2592997/Blogs/WeeklyBlogs/Week 9.html`},
    {name: "Blog 10", href:`/WSOA3028A_2592997/Blogs/WeeklyBlogs/Week 10.html`},
    {name: "Blog 11", href:`/WSOA3028A_2592997/Blogs/WeeklyBlogs/Week 11.html`},
    {name: "Blog 12", href:`/WSOA3028A_2592997/Blogs/WeeklyBlogs/Week 12.html`},
    {name: "Blog 13", href:`/WSOA3028A_2592997/Blogs/WeeklyBlogs/Week 13.html`},
]

export function createBlogNavigationBar(currentBlogPage){
    console.log("the script is running");
    const nav = document.querySelector("body > section > nav");
    const ul = document.createElement("ul");

    for (let i = 0; i < blogPages.length; i++){
        const li = document.createElement("li");
        if (currentBlogPage != blogPages[i].name){
            const a = document.createElement("a");
            a.innerText = blogPages[i].name;
            a.setAttribute("href", blogPages[i].href)                
            li.appendChild(a)  
        }
        else{
            li.innerText = blogPages[i].name
            li.style.color = 'gray';
        }
        ul.appendChild(li);
        nav.appendChild(ul);      
    }
}
