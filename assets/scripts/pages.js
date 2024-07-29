let navigation = document.querySelectorAll(".navigation");
let mainData = document.querySelector(".data");
let hamburger = document.querySelector(".fa-bars");
let offCanvas = document.querySelector(".off-canvas");
let cross = document.querySelector(".fa-xmark");
let sideBar = document.querySelector(".sidebar");
let userIcon = document.querySelector(".fa-user");
let moveBack = document.querySelector(".fa-arrow-left");

for(let i = 0; i < 8; i++){
    if(window.location.href === navigation[i].href){
        navigation[i].style.color = "#183D3D";
    }
}

let showOffCanvas = () => {
    offCanvas.style.transition = "width 1s ease-out";
    offCanvas.style.visibility = "visible";
    offCanvas.style.width = "200px";
    offCanvas.style.right = "10px";
    offCanvas.style.padding = "20px 20px";
}
let hideOffCanvas = () => {
    offCanvas.style.transition = "width 1s ease-in";
    offCanvas.style.width = "0";
    offCanvas.style.right = "0";

    setTimeout(() => {
        offCanvas.style.padding = "20px 0";
        offCanvas.style.visibility = "hidden";
    }, "1000");

}
hamburger.addEventListener("click", showOffCanvas);
cross.addEventListener("click", hideOffCanvas);

let showProfile = () => {
    sideBar.style.transition = "width 1s ease-out";
    sideBar.style.width = "100%";
    sideBar.style.visibility = "visible";
}
let hideProfile = () => {
    sideBar.style.transition = "width 1s ease-in";
    sideBar.style.width = "0";
    setTimeout(() => {
        sideBar.style.visibility = "hidden";
    }, "1000");
}
userIcon.addEventListener("click", showProfile);
moveBack.addEventListener("click", hideProfile);