let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    
    show = !show;
})

const $menuSection = document.querySelector('.menu-section')
	
	const $links1 = document.querySelector('.links1')
	const $links2 = document.querySelector('.links2')
	const $links3 = document.querySelector('.links3')
	const $links4 = document.querySelector('.links4')
    const $links5 = document.querySelector('.links5')

	const $links_Open = document.querySelector('.links_Open')

	$links1.addEventListener('click',function() {
		$menu.classList.remove('in')
	})

	$links2.addEventListener('click',function() {
		$menu.classList.remove('in')
	})

	$links3.addEventListener('click',function() {
		$menu.classList.remove('in')
	})

	$links4.addEventListener('click',function() {
		$menu.classList.remove('in')
	})

    $links5.addEventListener('click',function() {
		$menu.classList.remove('in')
	})