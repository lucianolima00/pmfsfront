// Show aside text
function asideShow(){
	var elSpan = document.getElementsByClassName('aside-span');
	var elNav = document.getElementsByClassName('nav-item');
	var elAside = document.getElementById('aside-nav');
	var elContent = document.getElementsByClassName('container');
	var elFooter = document.getElementsByClassName('footer');
	for (var i = 0; i < elSpan.length; i++){
		elSpan[i].style.visibility = "visible";
		elNav[i].style.width = "150px";
		elAside.style.width = "160px";
	}
	elContent[0].style.marginLeft = "160px";
	elContent[0].style.paddingRight = "160px";
	elFooter[0].style.paddingRight = "200px";
}
//Hidde aside text
function asideHidde(){
	var elSpan = document.getElementsByClassName('aside-span');
	var elNav = document.getElementsByClassName('nav-item');
	var elAside = document.getElementById('aside-nav');
	var elContent = document.getElementsByClassName('container');
	var elFooter = document.getElementsByClassName('footer');
	for (var i = 0; i < elSpan.length; i++){
		elSpan[i].style.visibility = "hidden";
		elNav[i].style.width = "47.5px";
		elAside.style.width = "60px";
	}
	elContent[0].style.marginLeft = "60px";
	elContent[0].style.paddingRight = "60px";
	elFooter[0].style.paddingRight = "100px";
}

var elAside = document.getElementById('aside-nav');
elAside.onmouseover = asideShow;
elAside.onmouseout = asideHidde;
