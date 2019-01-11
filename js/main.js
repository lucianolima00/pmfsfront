// JavaScript Document
function asideShow(){
	var elSpan = document.getElementsByClassName('aside-span');
	var elNav = document.getElementsByClassName('nav-item');
	var elAside = document.getElementById('aside-nav');
	for (var i = 0; i < elSpan.length; i++){
		elSpan[i].style.visibility = "visible";
		elNav[i].style.width = "150px";
		elAside.style.width = "160px";
	}
}
function asideHidde(){
	var elSpan = document.getElementsByClassName('aside-span');
	var elNav = document.getElementsByClassName('nav-item');
	var elAside = document.getElementById('aside-nav');
	for (var i = 0; i < elSpan.length; i++){
		elSpan[i].style.visibility = "hidden";
		elNav[i].style.width = "50px";
		elAside.style.width = "60px";
	}
}

var elAside = document.getElementById('aside-nav');
elAside.onmouseover = asideShow;
elAside.onmouseout = asideHidde;

window.onscroll = function() {stickNavMenu()};

// Get the navbar
var navbar = document.getElementById("navbar");
var asidebar = document.getElementById("aside-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNavMenu() {
	if (window.pageYOffset >= sticky) {
	  navbar.classList.add("sticky")
	  asidebar.classList.add("stickyaside")
	} else {
	  navbar.classList.remove("sticky");
	  asidebar.classList.add("stickyaside")
	}
}