let show = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")

menuSection.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on");
    menuToggle.classList.toggle("on");

    show = !show
})

menuSection.addEventListener(".link").forEach(n => n.addEventListener("click", () =>{

    menuSection.classList.remove("on");
    menuToggle.classList.remove("on");
}));