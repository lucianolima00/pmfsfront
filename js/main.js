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
	NavBar[0].style.paddingLeft = "100px";
	Content[0].style.marginLeft = "160px";
	Content[0].style.paddingRight = "160px";
	Footer[0].style.paddingRight = "200px";
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
	NavBar[0].style.paddingLeft = "0px";
	Content[0].style.marginLeft = "60px";
	Content[0].style.paddingRight = "60px";
	Footer[0].style.paddingRight = "100px";
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
	}
	else{
		body.className = "dark-mode";
		button.innerHTML = '<i class="fas fa-sun"></i><span class="aside-span">LightMode</span>';
	}
}
