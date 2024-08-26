function highlightCurrentNav() {
    const baseUrl = window.location.origin;
    const fullUrl = window.location.href;

    const extension = fullUrl.replace(baseUrl, "");

    let nav;

    if (extension === "/") {
        nav = document.getElementById("homeNavLink");
    } else if (extension === "/articles.html") {
        nav = document.getElementById("articlesNavLink");
    } else if (extension === "/contact.html") {
        nav = document.getElementById("contactNavLink");
    }    

    nav.style.textDecoration = "Underline";
    nav.style.textUnderlineOffset = "5px";
    nav.style.fontWeight = "bold";
    nav.style.textShadow = "0 0 5px black";
}

function contactFormSubmit() {
    const firstName = document.getElementById("firstNameInput").value;
    const lastName = document.getElementById("lastNameInput").value;
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("messageInput").value;

    const userSubmission = 
        `
        You have submitted the following details: 

        First name: ${firstName}
        Last name: ${lastName}
        Email: ${email}
        Message: ${message}
        `
    alert(userSubmission);

    document.getElementById("thankYouMessage").style.display = "block";
    document.getElementById("sendButton").style.display = "none";
}

highlightCurrentNav()