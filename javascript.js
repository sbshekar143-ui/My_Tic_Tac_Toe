let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let playagain = document.querySelector(".playagain");
let popup = document.querySelector("#popupoverlay");
let winner = document.querySelector(".winner");
let popupcontent = document.querySelector(".popup-content");

let turnO = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

popup.style.display = "none";


const disableboxes = () =>{
    for (let box of boxes){
    box.disabled = true;
}
}
const resetgame = () => {
    for (let box of boxes){
    box.disabled = false;
    box.innerText = "";
}
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO = true;          
        }
        box.disabled = true;
       if ( checkwinner ()) {
        draw();
       }
        
       
        
    });
});
const checkwinner=() => {
    for (let pattern of winpatterns) {
       let postval1= boxes[pattern[0]].innerText;
       let postval2= boxes[pattern[1]].innerText;
       let postval3= boxes[pattern[2]].innerText;
       if (postval1 != "" && postval2 != "" && postval3 != ""){
        if (postval1 === postval2 && postval2 === postval3) {
            disableboxes();
            popup.style.display = "flex";
            winner.innerText = `Player ${postval1} Wins`;
            
                      
        }
       }
       
    }

};

const draw = () => {
    let isdraw = true;
    for (let box of boxes) {
        if (box.innertext === "") {
            isdraw = false;
            break;
        }
    }
    if (isdraw) {
        popup.style.display = "flex";
        winner.innertext ="Game Draw";
        disableboxes();
    }
};
playagain.addEventListener("click",() =>{
    resetgame();
    popup.style.display = "none";
});

reset.addEventListener("click",resetgame);
