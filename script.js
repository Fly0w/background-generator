var css = document.querySelector(".css");
var val = document.querySelector(".val");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomize");
var angle = document.querySelector(".angle1");

function setGradient() {
	body.style.background = "linear-gradient(" + angle.value/100 + "turn, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
	val.textContent = angle.value + "% Rotation";
}

function randomColor(){
	return Math.floor(Math.random()*16777215).toString(16);
}
function randomAngle(){
	return (Math.random()*100);
}

function randomize(){
	color1.value = "#" + randomColor();
	color2.value = "#" + randomColor();
	angle.value = randomAngle();
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomize);
angle.addEventListener("input", setGradient);