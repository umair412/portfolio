let navigation = document.querySelectorAll(".navigation");
let mainData = document.querySelector(".data");

for(let i = 0; i < 8; i++){
    if(window.location.href === navigation[i].href){
        navigation[i].style.color = "#183D3D";
    }
}
let hamburger = document.querySelector(".fa-bars");
let offCanvas = document.querySelector(".off-canvas");
let cross = document.querySelector(".fa-xmark");
let showOffCanvas = () => {
    offCanvas.style.transition = "width 1s ease-out"
    offCanvas.style.width = "200px"
    offCanvas.style.right = "10px"
    offCanvas.style.padding = "20px 20px";
}
let hideOffCanvas = () => {
    offCanvas.style.transition = "width 1s ease-in"
    offCanvas.style.width = "0"
    offCanvas.style.right = "0"
    setTimeout(() => {
        offCanvas.style.padding = "20px 0";

    }, "1000");

}
hamburger.addEventListener("click", showOffCanvas);
cross.addEventListener("click", hideOffCanvas);