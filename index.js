var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1)+1;
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2)+1;
console.log(randomNumber2);


document.querySelector(".img1").setAttribute("src","images/dice"+(randomNumber1)+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+(randomNumber2)+".png");

// var display = "Lets Begin";
if(randomNumber1 === randomNumber2){
     var display = "Draw";
} else if(randomNumber1 > randomNumber2) {
     var display = "Player_1_WINS";
} else{
     var display = "Player_2_WINS";
}

document.querySelector("h1").textContent = display;