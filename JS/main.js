
var currentPlayer = "X";

var handleTurn = function(id) {
    boxId = document.getElementById(id);   
    if(currentPlayer === "X" && boxId.innerHTML === "&nbsp;" && currentPlayer != "O"){      
            boxId.innerHTML = "X";
            currentPlayer = "O";  
            console.log(currentPlayer.innerHTML);
            win();     
    }else if (currentPlayer === "O" && boxId.innerHTML === "&nbsp;" && currentPlayer != "X"){
            boxId.innerHTML = "O"
            currentPlayer = "X"
            console.log(currentPlayer.innerHTML);
            win();        
    }else{
        console.log("didn't work")
    }
}


function reset(){
    var boxElements = document.getElementsByClassName("board-grid");
    for(let i = 0; i < boxElements.length; i++ ){
        var eachBox = boxElements[i].innerHTML = "&nbsp;";
        console.log(boxElements[i]);
        console.log(eachBox);
    }
}

// check for top row win

function win(){
    // checkWin(0,1,2);
    // checkWin(3,4,5);
    // checkWin(6,7,8);
    var boxElements = document.getElementsByClassName("board-grid");
    for(let i = 0; i < boxElements.length; i++ ){
        if(boxElements[0].innerHTML === "X" && boxElements[1].innerHTML === "X" && boxElements[2].innerHTML === "X"){
            return alert("You win press the reset botton to play again");
        }
    }
}

// this function will check array for a win of x or o.

// function checkWin(firstBox, secondBox, thirdBox) {
//     var boxElements = document.getElementsByClassName("board-grid");
//     if(boxElements[firstBox].innerHTML === "X" && boxElements[secondBox].innerHTML === "X" && boxElements[thirdBox].innerHTML === "X"){
//         return alert("X wins press the reset button to play again");
//     }
// }
