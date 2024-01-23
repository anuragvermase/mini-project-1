userScore=0;
aiScore=0;

let choices = document.querySelectorAll(".choice");
const message = document.getElementById("msg");
const userScorePara = document.querySelector("#user-score");
const aiScorePara = document.querySelector("#ai-score");

const genAiChoice = () =>{
    const options = ["stone","paper","scissor"];
    const optIndex = Math.floor(Math.random()*3);
    return options[optIndex];
}


const drawGame = () => {
    console.log("Game Draw");
    message.innerText="Game Draw!";
};


const showWinner=(userWin,userChoice,aiChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        message.innerText=`You Win! Your ${userChoice} beats ${aiChoice}`;
    }else{
        aiScore++;
        aiScorePara.innerText=aiScore;
        console.log("You Lose");
        message.innerText=`You Lose! Your ${userChoice} lost By ${aiChoice}`;
    }
};


const playGame=(userChoice)=>{
console.log("user choice = ", userChoice);
const aiChoice = genAiChoice();
console.log("Ai choice = ",aiChoice)

if(userChoice===aiChoice){
    // drawgame
    drawGame();
}else {
 let userWin=true;
 if(userChoice==="rock"){
    //scissor, paper
    userWin = aiChoice==="paper" ? false:true;
 }else if(userChoice==="paper"){
    //rock,scissor
    userWin = aiChoice==="scissor" ? false:true;
 }else{
 userWin = aiChoice==="rock" ? false:true;
 }
 showWinner(userWin,userChoice,aiChoice);
}

};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        // console.log("choice is clicked",userChoice);
        playGame(userChoice);
    });
});