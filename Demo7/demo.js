function closeMobileMenu() {
    document.getElementById("mobileMenu").classList.remove("flex");
    document.getElementById("mobileMenu").classList.add("hidden");
}

function openMobileMenu() {
    document.getElementById("mobileMenu").classList.remove("hidden");
    document.getElementById("mobileMenu").classList.add("flex");
}

function moveCursor() {
    document.getElementById.style.left = cursorInfo.clientX;
    document.getElementById.style.top = cursorInfo.clientY;

    cursorInfo = {
        clientX: "200px",
        clientY: "300px"
    }
}