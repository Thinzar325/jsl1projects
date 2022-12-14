var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){scrollpoint()};

function scrollpoint(){
	// console.log('hi');


	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop); // 0 to 11710

	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight); // 12203

	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

	var calcheight = getscrollheight - getclientheight;
	// console.log(calcheight);

	// var getfinal = getscrolltop * 100 / calcheight;
	var getfinal = Math.floor((getscrolltop / calcheight) * 100);
	// console.log(getfinal);

	getprogressbar.style.width = `${getfinal}%`;
}

function printme(){
	// console.log('hay');

	window.print();
}