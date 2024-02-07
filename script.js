//MEN BANNER
document.querySelector(".window1").addEventListener("mouseover", function(){
	event.target.style.backgroundImage = "url(images/men-banner.gif)"
})
document.querySelector(".window1").addEventListener("mouseleave", function(){
	event.target.style.backgroundImage = "url(images/men-banner.jpg)"
})
//SHOES BANNER
document.querySelector(".window2").addEventListener("mouseover", function(){
 	event.target.style.backgroundImage = "url(images/shoes-banner.gif)"
})
document.querySelector(".window2").addEventListener("mouseleave", function(){
   	event.target.style.backgroundImage = "url(images/shoes-banner.webp)"
})
//WATCHES BANNER
document.querySelector(".window3").addEventListener("mouseover", function(){
	event.target.style.backgroundImage = "url(images/watches-banner.gif)"
})
document.querySelector(".window3").addEventListener("mouseleave", function(){
	event.target.style.backgroundImage = "url(images/watches-banner.jpg)"
})
//WOMEN BANNER
document.querySelector(".window4").addEventListener("mouseover", function(){
	event.target.style.backgroundImage = "url(images/women-banner.gif)"
})
document.querySelector(".window4").addEventListener("mouseleave", function(){
	event.target.style.backgroundImage = "url(images/women-banner.jpg)"
})
//CATEGORIES ITEMS
document.querySelectorAll(".item").forEach(el => {
	el.addEventListener("mouseover", function(){
		event.target.style.transform = "rotateZ(-40deg) scale(1.2)"
		event.target.style.zIndex = "10"
		el.querySelector(".name, .info").style.display = "flex"
	})
	el.addEventListener("mouseleave", function(){
		event.target.style.transform = "rotateZ(0deg) scale(1)"
		event.target.style.zIndex = "1"
		el.querySelector(".name, .info").style.display = "none"
	})
})
//JS SUB-NAVBAR SHOW-HIDE
let opened_element = null
document.querySelectorAll(".navbar > li").forEach(el => {
	el.addEventListener("click", function(){
		document.querySelectorAll(".sublist").forEach(subl => {
			subl.style.left = "-60vh"
		})
		let sublist = event.target.querySelector(".sublist")
		sublist.style.left = "0"
		if(opened_element == sublist) 
		{
			sublist.style.left = "-60vh"
			opened_element = null
			return
		}
		opened_element = sublist
	})
})
let windows = document.querySelectorAll('.main > div')
windows.forEach((el) => {
	const height = el.clientHeight //Saving W and H of hovered element
	const width = el.clientWidth
	el.addEventListener('mousemove', handleMove) // On mouse move on element calling for handleMove
	el.addEventListener('mouseout', function() { // Returning to default size on mouseout
		el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
	})
	function handleMove(e) { //handlemoves
	  const xVal = e.layerX //saving pos of mouse on hovered element
	  const yVal = e.layerY
	  const yRotation = 45 * ((xVal - width / 2) / width) //calculating rotations for two axis. 45 is how hard el would rotate
	  const xRotation = -45 * ((yVal - height / 2) / height)
	  el.style.transform = `perspective(500px) scale(1.3) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
	}
})