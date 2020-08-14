
function YourAge() {
    var birthyear =  prompt("what year you were born?");
    var AgeinDays = (2020-birthyear)*365;
    var h3 = document.createElement('h3');
    var textAnswer = document.createTextNode("You are "+AgeinDays+" days old.");
    h3.setAttribute("id",'YourAge');
    h3.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h3);
}

function reset(){
    document.getElementById('YourAge').remove();
}


function gencat(){
    var image = document.createElement('img');
    var div= document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif"
    div.appendChild(image);
}


function removecat() {
    const myNode = document.getElementById("flex-cat-gen");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
}


function rpsgame(yourChoice) {
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randTorpsInt());
    console.log('Computer choice:',botChoice);

    results = decideWinner(humanChoice,botChoice);
    console.log(results);

    message =finalMessage(results); //{message: you Won; colour : green}
    console.log(message);

    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randTorpsInt(){

    return Math.floor(Math.random() * 3 );

}

function numberToChoice(number) {
    return ['rock','paper','scissors'] [number];
}

function decideWinner(yourChoice, ComputerChoice){
    var rpsDatabase ={
        'rock':{'scissors': 1,'rock': 0.5,'paper':0},
        'paper':{'scissors': 0,'rock': 1,'paper':0.5},
        'scissors':{'scissors': 0.5,'rock': 0,'paper':1}
    };

    var YourScore = rpsDatabase[yourChoice][ComputerChoice];
    var ComputerScore = rpsDatabase[ComputerChoice][yourChoice];

    return [YourScore,ComputerScore];
}

function finalMessage([YourScore]){
    if (YourScore === 0)
    {
        return {'message': 'You lost!', 'color' : 'Red'};
    }
    else if (YourScore === 0.5)
    {
        return {'message': 'You Tied!', 'color' : 'Yellow'};
    }
    else {
        return {'message': 'You Won!','color' : 'Green'};
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase ={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    
    // remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // show the chosen images and message
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
   

    humanDiv.innerHTML = "<img src = ' " + imagesDatabase[humanImageChoice] +"'height = 150  width = 150 style='box-shadow: 0px 10px 50px  rgb(21, 21, 199)'>"
    messageDiv.innerHTML ="<h2 style=color:" +finalMessage['color']+"; font-size:60px; padding:30px;> " +finalMessage['message'] + "</h2>"
    botDiv.innerHTML = "<img src = ' " + imagesDatabase[botImageChoice] +"'height = 150  width = 150 style=' box-shadow: 0px 10px 50px  rgb(255, 0, 0)'>"
   

    document.getElementById("flex-box-rps-div").appendChild(humanDiv);  
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);  
    document.getElementById("flex-box-rps-div").appendChild(botDiv);  

}

//challenge 4: Button Colour Changer

var all_buttons = document.getElementsByTagName("button");//gets all the buttons present 
//console.log(all_buttons);

var copyAllButtons=[];
// loop runs to obtain all the buttons
for (let i=0;  i < all_buttons.length; i++)
{
    copyAllButtons.push(all_buttons[i]);
}

//console.log (copyAllButtons);

function buttonColorChange(buttonThingy)
{
    if (buttonThingy.value === 'red'){
        buttonsRed();
    } else if(buttonThingy.value ==='green'){
        buttonsGreen();
    } else if(buttonThingy.value ==='blue'){
        buttonsBlue();
    } else if(buttonThingy.value ==='yellow'){
        buttonsYellow();
    } else if(buttonThingy.value ==='random'){
        buttonsColorRandom();
    } else if(buttonThingy.value ==='reset'){
        buttonsColorReset();
    }
}

function buttonsRed(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsYellow(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

function buttonsBlue(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}


function buttonsColorReset(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonsColorRandom(){
    let choices = ['btn-primary','btn-warning','btn-success','btn-danger'];
    for (let i=0; i < all_buttons.length; i++){
        let randomColour = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomColour]);
        }
}