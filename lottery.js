var userNum = [];
var userPowerBallNum = 0;
var lottoNum = [];
var lottoPowerBallNumber = 0;
var years = 0;
var tempTxt = "num";

var week = [];
var winning = [];

var moneySpent = 0;

//gathers random lottery numbers + powerball
for (var i = 0; i < 5;i++){
	lottoNum[i] = Math.floor((Math.random() * 75) + 1);
}
lottoNum.sort();	
lottoPowerBallNumber = Math.floor((Math.random() * 15) + 1);
//alert(lottoNum);

function doWork(){
	alert("Doing work son");
	for(var i = 0; i < years; i++){
		for (var j = 0; j < 53; j++){
			//52 weeks per year shit goes here. 	

		}
	}

}

//When user clicks quick pick
function getRanNums(){
	for (var i = 0; i < 5; i++){
		userNum[i] = Math.floor((Math.random() * 75) + 1);
	}
	userNum.sort();
	userPowerBallNum = Math.floor((Math.random() * 15) + 1);
	alert("Your numbers : " + userNum + "\n PowerBall: " + userPowerBallNum);
	doWork();
}

//Gets text boxes with numbers
function getNums(){
	var x = document.getElementById("nums");
	for (var i = 0; i < 6; i++){
		userNum[i] = x.elements[i].value;
		//alert(userNum[i]);
	}
	userNum.sort();
	userPowerBallNum = x.elements[5].value;
	years = x.elements[6].value;
	doWork();
}

