const ham = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const sideBar = document.querySelector(".sidebar");


// ham.onclick = function() {
//     sideBar.classList.toggle("active")   /* toggle */ /* hace funcionar el icono de hamb*/ 
// }


ham.onclick = function() {
    sideBar.classList.remove("active")
}


close.onclick = function() {
    sideBar.classList.add("active")
}