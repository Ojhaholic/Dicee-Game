var Random1 = Math.floor(Math.random()*6) + 1;
var RandomDice1 = "images/dice"+Random1+".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src",RandomDice1);



var Random2 = Math.floor(Math.random()*6) + 1;
var RandomDice2 = "images/dice"+Random2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",RandomDice2);


if (Random1 > Random2){
    document.body.querySelector("h1").innerText ="⛳Player 1 wins"
}
else if (Random2 > Random1){
    document.body.querySelector("h1").innerText ="Player 2 wins⛳"
}
else (
    document.body.querySelector("h1").innerText ="It's a Draw"
)

