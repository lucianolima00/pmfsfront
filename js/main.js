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