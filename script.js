var listObject = [];
var globalCounter = 0;

class Cup 
{
    constructor(id) 
    {
        this.withBall = false;
        document.querySelector('#wrapper').innerHTML += '<div id="' + id + '" class="cup"> </div>';

        listObject[globalCounter] = id;
        globalCounter++;
    }
}

let cupOne = new Cup('cupOne');
let cupTwo = new Cup('cupTwo');
let cupThree = new Cup('cupThree');
let cupFour = new Cup('cupFour');
let cupFive = new Cup('cupFive');
let cupSix = new Cup('cupSix');
let cupSeven = new Cup('cupSeven');
let cupEight = new Cup('cupEight');
let cupTen = new Cup('cupTen');
let cupNine = new Cup('cupNine');
let cupEleven = new Cup('cupEleven');
let cupTwelwe = new Cup('cupTwelwe');

let randomNumber = Math.round(Math.random() * (globalCounter - 1));
document.getElementById(listObject[randomNumber]).innerHTML = '<div class="ball"> </div>';

for (let i = 0; i < globalCounter; i++) 
{
    if (i == randomNumber) {
        document.getElementById(listObject[i]).addEventListener('click', function () 
        {
            alert('Вы победили');
            location.reload(true);
        });
    } 
    else 
    {
        document.getElementById(listObject[i]).addEventListener('click', function () 
        {
            alert('Вы проиграли');
            location.reload(true);
        });
    }
}