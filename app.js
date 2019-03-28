var scores, roundScore, activePlayer, gamePlaying;
gamePlaying = true;
newGame();

function btn(){
    if(gamePlaying){
        var dice = Math.floor((Math.random() * 6) + 1);
        var dice1 = Math.floor((Math.random() * 6) + 1);

        document.getElementById('dice').style.display = 'block';
        document.getElementById('dice').src = `dice-${dice}.png`;
        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice1').src = `dice-${dice1}.png`;
        var dices = dice + dice1;
        switch(true){
            case(dices === 12): 
            document.getElementById(`score-${activePlayer}`).textContent = 0;
            nextPlayer();

            break;
            case(dice === 1): nextPlayer();
            break;
            case(dice1 === 1): nextPlayer();  
            break;
            case(dice > 1):
            case(dice1 > 1):
            roundScore += dices;
            return document.getElementById(`current-${activePlayer}`).textContent = roundScore;  
             
            
        }
    }
}

function hld(){
    if(gamePlaying){
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer] += roundScore;
        document.getElementById('dice').style.display = 'none';
        document.getElementById('dice1').style.display = 'none';

        var input = document.querySelector('.input-res').value;
        var targetScore;

        if(input){
            targetScore = input;
        }else{
            targetScore = 100;
        }

        if(scores[activePlayer] >= targetScore){
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
    document.getElementById('dice1').style.display = 'none';
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

