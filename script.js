const menuBar=document.getElementById("menu-icon");
const shortCutE1=document.querySelector(".shortcut");
console.log(shortCutE1);

menuBar.addEventListener("click",()=>{
    menuBar.classList.toggle("bx-x");
    shortCutE1.classList.toggle('active');
    
})