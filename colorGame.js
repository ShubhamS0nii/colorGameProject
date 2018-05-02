var numSquares = 6;

var colors = colorArrayBuilder(numSquares);

var pickedColor = pickColor();

var displayPickedColor = document.getElementById("displayColor");

var squares = document.querySelectorAll(".square");

var sumText = document.querySelector("#summary");

var resetButton = document.querySelector("#resetGame");

var easyButton = document.querySelector("#easyBtn");

var hardButton = document.querySelector("#hardBtn");



//var top = document.querySelector("#top");

displayPickedColor.textContent = pickedColor;

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

function changeSquareBg() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = pickedColor;
	}
}

coloringSquares();

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		if (this.style.background == pickedColor) {
			changeSquareBg();
			document.querySelector("#top").style.background = pickedColor;
			document.getElementById("summary").textContent = "Right Answer!!";
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			sumText.textContent = "Wrong Answer!!!";
		}
	})
}

function colorArrayBuilder(num){
	var array = [];
	for (var i = 0; i < num; i++) {
	 array[i] = randomColor();
	}
	return array
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
	colors = colorArrayBuilder(numSquares);
	pickedColor = pickColor();
	document.querySelector("#displayColor").textContent = pickedColor;
	coloringSquares();
	document.querySelector("#top").style.background = "steelblue";
	sumText.textContent = " ";
	resetButton.textContent = "New colors";
	


})

function coloringSquares(){
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	}
}

easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquares = 3;
	colors = colorArrayBuilder(numSquares);
	pickedColor = pickColor();
	for (var i = 0; i < squares.length; i++) {
	if (colors[i]) {
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
	  }
	}
	displayPickedColor.textContent = pickedColor;
	document.querySelector("#top").style.background = "steelblue";
	sumText.textContent = " ";
	resetButton.textContent = "New colors";

})

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares = 6;
	colors = colorArrayBuilder(numSquares);
	pickedColor = pickColor();
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].style.display = "block";
	}
	displayPickedColor.textContent = pickedColor;
	document.querySelector("div").style.background = "steelblue";
	sumText.textContent = " ";
	resetButton.textContent = "New colors";
	


})