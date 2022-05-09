let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const menu = document.querySelector(".menu")
const link = menu.querySelector("#link")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    
    show = !show;
})

link.addEventListener("click", () => {

    document.body.style.overflow = !show ? "hidden" : "initial"

    menu.classList.toggle

    show = !show
    
})
