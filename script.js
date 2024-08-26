console.log("Hello world");

function highlightCurrentNav() {
    const baseUrl = window.location.origin;
    const fullUrl = window.location.href;

    const extention = fullUrl.replace(baseUrl, "");

    let nav;

    if (extention === "/") {
        nav = document.getElementById("homeNavLink");
    } else if (extention === "/articles.html") {
        nav = document.getElementById("articlesNavLink");
    } else if (extention === "/contact.html") {
        nav = document.getElementById("contactNavLink");
    }    

    nav.style.textDecoration = "Underline";
    nav.style.textUnderlineOffset = "5px";
    nav.style.fontWeight = "bold";
    nav.style.textShadow = "0 0 5px black";
}
highlightCurrentNav()