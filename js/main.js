// Show aside text
function asideShow(){
	var elSpan = document.getElementsByClassName('aside-span');
	var elNav = document.getElementsByClassName('nav-item');
	var elAside = document.getElementById('aside-nav');
	var elContent = document.getElementsByClassName('container-fluid');
	var elFooter = document.getElementsByClassName('footer');
	for (var i = 0; i < elSpan.length; i++){
		elSpan[i].style.visibility = "visible";
		elNav[i].style.width = "150px";
		elAside.style.width = "160px";
	}
	elContent[0].style.paddingLeft = "160px";
	elFooter[0].style.paddingLeft = "160px";
}
//Hidde aside text
function asideHidde(){
	var elSpan = document.getElementsByClassName('aside-span');
	var elNav = document.getElementsByClassName('nav-item');
	var elAside = document.getElementById('aside-nav');
	var elContent = document.getElementsByClassName('container-fluid');
	var elFooter = document.getElementsByClassName('footer');
	for (var i = 0; i < elSpan.length; i++){
		elSpan[i].style.visibility = "hidden";
		elNav[i].style.width = "47.5px";
		elAside.style.width = "60px";
	}
	elContent[0].style.paddingLeft = "60px";
	elFooter[0].style.paddingLeft = "60px";
}

var elAside = document.getElementById('aside-nav');
elAside.onmouseover = asideShow;
elAside.onmouseout = asideHidde;
