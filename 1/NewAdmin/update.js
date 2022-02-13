
window.onload = function(){
    let btn = document.querySelector("#btn");
    let updates = document.querySelector(".data-contain");
    
    btn.onclick = function(){
        updates.classList.toggle("active")
    }
}