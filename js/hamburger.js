//Toggle animation for hamburger menu.//
const navSlide = () => {
	const hamburger = document.querySelector(".hamburger");
	const nav = document.querySelectorAll(".top");
	const navLinks = document.querySelectorAll(".top li");
  
	hamburger.addEventListener("click", () => {
	//Toggle Nav//
		nav.classList.toggle("nav-active");
	//Animate Links//
		navLinks.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = ''
			}
			else {
			link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.2}s`;
			}
			//console.log(index / 7 + ); should allow any additional links to be automatically adjusted for in animation//
		});
		//Hamburger Animation//
		hamburger.classList.toggle("hamburgerclick");
	});
}
//navSlide();
function basicBurger (){
	let open =document.querySelector(".fa-navicon");
	let close = document.querySelector(".fa-close");
  	let hamburger = document.querySelector(".hamburger");
	let nav = document.querySelector(".top-nav");
	//const navLinks = document.querySelectorAll(".navlinks li");
  hamburger.addEventListener("click", () => {
	//Toggle Nav//
    console.log(`nav links are: ${nav}`)
		nav.classList.toggle("nav-active");
		close.classList.toggle("show");
		open.classList.toggle("hide");
        hamburger.classList.toggle("active");
    //congrats//
  
  });
  console.log("the listener has been added")
}
basicBurger();







