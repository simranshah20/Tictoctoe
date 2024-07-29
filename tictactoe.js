let boxes=document.querySelectorAll(".box");
let restartBtn=document.querySelector("#restart-btn");
let newGameBtn=document.querySelector("#newgame-btn");
let msgContainer=document.querySelector(".winner_container");
let msg=document.querySelector("#msg");

let turnO=true; //playerX,playerO
const winner=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
//to reset game
const resetGame=()=>{
    turnO==true;
    enableBtn();
    msgContainer.classList.add("hide");//to hide congratulation msg
};
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{ 
    if(turnO==true){
        //playerO
        box.innerText="O";
        turnO=false;
    }
    else{
        //playerX
        box.innerText="X";
        turnO=true;
    }
    box.ariaDisabled=true;//avoid to change the value when button is double clicked
checkWinner();  
});
});
//to disable btn after showing the winnner
const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//to enable boxes after game is over
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML=""; //to reset all box and make them empty
    }
}
const showWinner=(winner)=>{
msg.innerHTML=`Congratulations,winner is ${winner}`;
msgContainer.classList.remove("hide");//to show winner container
disableBtn();
}

const checkWinner=()=>{
    for(let pattern of winner){
        //to show the entered values on boxes
       let pos1Val=boxes[pattern[0]].innerText;
       let pos2Val=boxes[pattern[1]].innerText;
       let pos3Val=boxes[pattern[2]].innerText;

       //to check winning pattern
       if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
        //to find winning pattern
        if(pos1Val==pos2Val && pos2Val==pos3Val){
            //to show winner msg
            showWinner(pos1Val);
        }
       } 
    }
}

newGameBtn.addEventListener("click",resetGame);//for newgame
restartBtn.addEventListener("click",resetGame);//for restart