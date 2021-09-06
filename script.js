'use strict';

//selecting the element ...
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');//we are selecting by using element sowe are using # symbol ... we have one method of doing that we writing down below ...
const score1El = document.getElementById('score--1');// in this we dont need the # symbol...
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnNull = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//starting conditions ...
//score0El.textContent = 0;
//score1El.textContent = 0;




// we intilaises with [] this bracket here this code means we havw arrayt score and it stotre 0,0 as value which we are going to use for the .. 
//BECAUSE WE ARE STARTING FROM PLAYER NUMBER 1 WE SET IT TO ZERO AND DURING THE WE WILLN CHANGE THE PLAYER 1 PLAYER2 ACCORDINGLY ,, SO WE PUT LET HERE .. AND WHEN PLAYER 2 WILL PLAY WE SET THAT 1 ... THAT IT WE ARE DOING HERE ...

//AND WE ARE DOING SO BECAUSE WE ARE GOING...WE ARE GOING TO ULTIMATELY ADD THE SCORE IN ARAY AND ARRAY WILL HAVE SCORE OF BOTH PLAYER THEN AFTER THAT THEY WILL HAVE .. AS OF STARTING THEY WILL HAVE 0,0 ...
let score, currentScore, activePlayer, playing;

const initial = function () {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');// frist player hmara active player hoga starting me ..
    player1El.classList.remove('player--active');
};
initial();

const switchPlayer = function () {
    //switch nxt player ....
    document.getElementById(`current--${activePlayer}`).textContent = 0;//here we are just meeting the intial condition just meeting the player 2...A
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // mtlb hai to nahi kar dega , nahi hai to la dega ..
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};


//rolling dice functionality.. 
btnNull.addEventListener('click', function () {
    if (playing) {
        //1. generati(ng a random dice 
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        //2. display dice 
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        //3. check for rolled1:if true, switch to nxt player 
        if (dice != 1) {
            //add dice to current score ...
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

            //current0El.textContent = currentScore;//we are going to change this later ...


        } else {
            switchPlayer();
        }
    }     
});
btnHold.addEventListener('click', function () {
    if (playing) {
        //1. add current score to active player's score 
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        //2.check if player's score is >=100
        if (score[activePlayer] >= 100) {
            //finish the game 
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    
            document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        } else {
            //switch to the next player 
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click',initial);