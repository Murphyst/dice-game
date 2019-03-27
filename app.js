/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying;
gamePlaying = true;
newGame();

function btn(){
    if(gamePlaying){
        var dice = Math.floor((Math.random() * 6) + 1);
        var diceDOM = document.getElementById('dice')
        diceDOM.style.display = 'block';
        diceDOM.src = `dice-${dice}.png`;
    
        if(dice > 1){
        roundScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;    }else{
        nextPlayer()   
        }
    }
}

function hld(){
    if(gamePlaying){
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer] += roundScore;
        document.getElementById('dice').style.display = 'none';
        if(scores[activePlayer] >= 100){
        document.getElementById(`name-${activePlayer}`).textContent = ('Winner!!!');       
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
        gamePlaying = false;

        }else{
        nextPlayer();
        }
    }
}

function nextPlayer(){
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    roundScore = 0;
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
    activePlayer = Math.abs(activePlayer - 1);
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');

}

function newGame(){
    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; 
    document.getElementById('dice').style.display = 'none';
    document.getElementById('score-0').textContent = scores[0];
    document.getElementById('score-1').textContent = scores[1];
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;  
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.add('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
}

document.getElementById('btn-roll').addEventListener('click', btn);
document.getElementById('btn-hold').addEventListener('click', hld);
document.getElementById('btn-new').addEventListener('click', newGame);

