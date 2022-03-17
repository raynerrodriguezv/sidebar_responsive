const ham = document.querySelector(".hamburger");

const sideBar = document.querySelector(".sidebar");


ham.onclick = function() {
    sideBar.classList.toggle("active")
}