// Global Variables
var turn = true;
var content;
var winningCombos;
var boxesFilled = 0;
var winner = false;

// after everything has loaded
window.onload = function(){
    content = [];
    winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    for(var i = 0; i <= 8; i++){
        content[i] = '';
    }
}

// Function that runs when a box is clicked
function onBoxClick(id){  
    if (turn){
        document.getElementById(id).innerHTML = "X";
        document.getElementById("player").innerHTML = "O";
        content[id] = 'X';
    }else{
        document.getElementById(id).innerHTML = "O";
        document.getElementById("player").innerHTML = "X";
        content[id] = 'O';
    }
    turn = !turn;
    boxesFilled++;
    winnerCheck(content[id]);
    document.getElementById(id).style.pointerEvents = 'none'; // To disable onclick after it gets clicked
    
    if(boxesFilled == 9 && winner == false){
        alert("Cats Game - Tie");
        location.reload(true);
    }
}


//Function to check for a winner
function winnerCheck(symbol){
    for(var a = 0; a < winningCombos.length ; a++){
        if(content[winningCombos[a][0]] == symbol && content[winningCombos[a][1]] == symbol && content[winningCombos[a][2]] == symbol){
            alert(symbol + " WON!");
            winner = true;
            playAgain();
        }
    }
}

function playAgain(){
    var y = confirm('Play again?');
    if(y == true){
        location.reload(true);
    }
}