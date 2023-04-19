let score1 = 0 ,score2 = score1;
let yourChoice = document.getElementById('You-chose')
let opponentsChoice = document.getElementById('opponent-chose')
let yourScore = document.getElementById('score1')
let opponentsScore = document.getElementById('score2')
yourScore.innerHTML = score1
opponentsScore.innerHTML = score2
let diff = -1;
let choices = [
    {
        "name" : "rock",
        "image" :"assets/images/rock.png"
    },
    {
        "name" : "scissors",
        "image" : "assets/images/scissors.png"
    },
    {
        "name" : "papper",
        "image" : "assets/images/papper.png"
    }
]

function updateScore() {
    yourScore.innerHTML = score1;
    opponentsScore.innerHTML = score2;
}

let box1Pick = document.getElementById('box1-pick') // for your choice ( photo )
let box2Pick = document.getElementById('box2-pick') // for opponents choice ( photo )

function papperClick()
{
    box1Pick.innerHTML = ''
    const Ind = choices.find(choice => choice.name === 'papper');
    yourChoice.innerHTML = Ind.name;
    let img = document.createElement('img')
    img.setAttribute('src',Ind.image)
    box1Pick.appendChild(img)
    
    calcScore(chooseOppo(),Ind.name)
}

function rockClick()
{
    box1Pick.innerHTML = ''
    const Ind = choices.find(choice => choice.name === 'rock');
    yourChoice.innerHTML = Ind.name;
    let img = document.createElement('img')
    img.setAttribute('src',Ind.image)
    box1Pick.appendChild(img)

    calcScore(chooseOppo(),Ind.name)
}

function scissorsClick()
{
    box1Pick.innerHTML = ''
    const Ind = choices.find(choice => choice.name === 'scissors');
    yourChoice.innerHTML = Ind.name;
    let img = document.createElement('img')
    img.setAttribute('src',Ind.image)
    box1Pick.appendChild(img)
    
    calcScore(chooseOppo(),Ind.name)
}


function chooseOppo (){
    box2Pick.innerHTML = ''
    let choiceIndx = Math.floor(Math.random() * 3)
    while(choiceIndx == diff)
        choiceIndx = Math.floor(Math.random() * 3)
    diff = choiceIndx;

    let img = document.createElement('img')
    img.setAttribute('src',choices[choiceIndx].image)
    box2Pick.appendChild(img)
    opponentsChoice.innerText = choices[choiceIndx].name
    return choices[choiceIndx].name
}



function calcScore(opponent,your)
{
    let s = "scissors", p = "papper", r = "rock";
    if(opponent === your)
        score1++,score2++;
    else if( (opponent == s && your == p) ||  (opponent == p && your == r) || (opponent == r && your == s))
        score2++;
    else score1++;

    yourScore.innerHTML = score1
    opponentsScore.innerHTML = score2
    
}

function resetScore()
{
    yourScore.innerHTML = opponentsScore.innerHTML = score1 = score2 = 0;
    box1Pick.innerHTML = box2Pick.innerHTML = yourChoice.innerHTML = opponentsChoice.innerHTML = ''

}