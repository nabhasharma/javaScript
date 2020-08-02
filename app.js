const startGameBtn = document.getElementById('start-game-btn');

const ROCK='ROCK';
const SCISSOR='SCISSOR';
const PAPER='PAPER';
const DEFAULT_SELECTION=ROCK;
 gameIsRunning=false;
const RESULT_DRAW='DRAW';
const COMPUTER_WINS='COMPUTER_WINS';
const PLAYER_WINS='PLAYER_WINS';


// function startGame(){
//     console.log("The game has started...");

// }
// startGame();
// const person= {
//     greet:function greet() {
//         console.log("this is greeted");
        
//     }
// }


const PlayerChoice=()=>{
    const selection = prompt(`Enter Your choice ${ROCK} ${PAPER} ${SCISSOR}`,'').toUpperCase();
    if(selection!=ROCK
        &&selection!=SCISSOR
        &&selection!==PAPER){
            alert(`Invalid choice so we choose ${ROCK} for you`);
            return DEFAULT_SELECTION;
        

    }
    return selection;
}


const getWinner=(cChoice,pChoice)=>{
    if(cChoice===pChoice){
        return RESULT_DRAW;
    }
    else if(cChoice===ROCK&&pChoice===PAPER
        || cChoice===PAPER&&pChoice===SCISSOR
    ||cChoice===SCISSOR&&pChoice===ROCK){
        return PLAYER_WINS;
    }
    else {
        return COMPUTER_WINS;
    }    } 


const computerSelections=()=>{
    const selectionValue =Math.random();
    if(selectionValue<0.37){
        return ROCK;
    }
    else if(selectionValue<0.67){
        return PAPER;
    }
    else {
        return SCISSOR;
    }
}

const showResult=(messageText,result)=>{
alert(messageText+" "+result);
}
startGameBtn.addEventListener('click',()=>{
    if(gameIsRunning){
        return 
    }
    gameIsRunning=true;
    console.log("The game has started...");
    let playerSelection=PlayerChoice();
    let computerSelection=computerSelections();
    const winner=getWinner(computerSelection,playerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(winner);
    gameIsRunning=false;
    

})


const combine=(resultHandler,operations,...numbers)=>{
    let sum=0;
    const validateNumber=(number)=>{
        return isNaN(number)?0:number;
    }
    for(let num of numbers){
        if(operations==='ADD'){
            sum+=validateNumber(num);
        }
        if(operations==='SUBTRACT'){
            sum-=validateNumber(num);
        }
    
            }

 

   
    return resultHandler(sum);
}
combine(showResult.bind(this,'This is a add function'),'ADD',2,3,4,5,6,7,7,6);
combine(showResult.bind(this,'This is a subtract function'),'SUBTRACT',2,3,4,777,6,7,7,6);