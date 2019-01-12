// Show aside text
function asideShow(){
	var Span = document.getElementsByClassName('aside-span');
	var Nav = document.getElementsByClassName('nav-item');
	var Aside = document.getElementById('aside-nav');
	var NavBar = document.getElementsByClassName('wrapper');
	var Content = document.getElementsByClassName('container');
	var Footer = document.getElementsByClassName('footer');
	for (var i = 0; i < Span.length; i++){
		Span[i].style.visibility = "visible";
		Nav[i].style.width = "150px";
		Aside.style.width = "160px";
	}
	var wid = window.innerWidth;
	switch(true){
		case (wid >= 1200):
			NavBar[0].style.paddingLeft = "160px";
			Content[0].style.marginLeft = "160px";
			Content[0].style.paddingRight = "160px";
			break;
		case (wid >= 768):
			NavBar[0].style.paddingLeft = "160px";
			Content[0].style.marginLeft = "160px";
			Content[0].style.paddingRight = "160px";
			break;
		default:
			NavBar[0].style.paddingLeft = "60px";
			Content[0].style.marginLeft = "60px";
			Content[0].style.paddingRight = "60px";
			break;
	}

}
//Hidde aside text
function asideHidde(){
	var Span = document.getElementsByClassName('aside-span');
	var Nav = document.getElementsByClassName('nav-item');
	var Aside = document.getElementById('aside-nav');
	var NavBar = document.getElementsByClassName('wrapper');
	var Content = document.getElementsByClassName('container');
	var Footer = document.getElementsByClassName('footer');
	for (var i = 0; i < Span.length; i++){
		Span[i].style.visibility = "hidden";
		Nav[i].style.width = "47.5px";
		Aside.style.width = "60px";
	}
	var wid = window.innerWidth;
	switch(true){
		case (wid >= 1200):
			NavBar[0].style.paddingLeft = "60px";
			Content[0].style.marginLeft = "60px";
			Content[0].style.paddingRight = "60px";
			break;
		case (wid >= 768):
			NavBar[0].style.paddingLeft = "60px";
			Content[0].style.marginLeft = "60px";
			Content[0].style.paddingRight = "60px";
			break;
		default:
			NavBar[0].style.paddingLeft = "60px";
			Content[0].style.marginLeft = "60px";
			Content[0].style.paddingRight = "60px";
			break;
	}
}

var Aside = document.getElementById('aside-nav');
Aside.onmouseover = asideShow;
Aside.onmouseout = asideHidde;



function toggleDarkLight(){
	var body = document.getElementById("body");
	var currentClass = body.className;
	var button = document.getElementById("dark-light");
	if(currentClass == "dark-mode"){
		body.className = "light-mode";
		button.innerHTML = '<i class="fas fa-moon"></i><span class="aside-span">DarkMode</span>';
		asideShow();
	}
	else{
		body.className = "dark-mode";
		button.innerHTML = '<i class="fas fa-sun"></i><span class="aside-span">LightMode</span>';
		asideShow();
	}
}
