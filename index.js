function toggleNavbar() {
    var headerBtns = document.getElementsByClassName("headerBtns")[0];
    var headerProfile = document.getElementsByClassName("headerProfile")[0];
    if (headerBtns.className === "headerBtns") {
        headerBtns.className += " responsive";
        headerProfile.className += " responsive";
        document.getElementsByClassName("headerHamburger")[0].src = "./static/headerHamburgerCloseIcon.png";
    } else {
        headerBtns.className = "headerBtns";
        headerProfile.className = "headerProfile";
        document.getElementsByClassName("headerHamburger")[0].src = "./static/headerHamburgerIcon.png";
    }
}