var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// Mode buttons event listeners
	setUpModeButtons();
	// square listeners
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0;i<modeButtons.length; i++)
	{
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent ==="Easy"){
			numberOfSquares = 3;
		} else{
			numberOfSquares = 6;
		}
		reset();
		//how many squares to show
		// pick new colors
		// pick a new pickedColor
		// update page to reflect changes
		});
	}
}

function setUpSquares(){
	for(var i=0; i<squares.length; i++)
	{ 
		// add click listeners to square
		squares[i].addEventListener("click", function(){
			// Grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColor(pickedColor);
				h1.style.backgroundColor = clickedColor;
			}
				else
				{
					this.style.backgroundColor = "#232323"
					messageDisplay.textContent = "Try Again";
				}
		});
	}
}

resetButton.addEventListener("click", reset);

function changeColor(color){
	for(var i=0; i<squares.length; i++)
		squares[i].style.backgroundColor = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// add num random colors to array
	for(var i=0; i<num; i++)
	{
		// get random color and push into arr
		arr.push(randomColor());
	}
	// retunr that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 to 255
	var r = Math.floor(Math.random()*256);
	// pick a "green" from 0 to 255
		var g = Math.floor(Math.random()*256);
	// pick a blue from 0 to 255
		var b = Math.floor(Math.random()*256);
		// rgb(r,g,b)
		return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset()
{
	resetButton.textContent = "New Colors";
	// generate new colors
	colors = generateRandomColors(numberOfSquares);
	// pick a new random col from arr
	pickedColor=pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none"
		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}



// easyBtn.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numberOfSquares = 3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	for(var i=0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else
// 		{
// 			squares[i].style.display= "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	for(var i=0; i<squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display= "block";
// 	}
// });