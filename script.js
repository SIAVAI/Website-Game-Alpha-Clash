const artBoard = document.getElementById('art-board');
const modalBox = document.getElementById('modal-box');

document.addEventListener('keyup',function handleKeyboardButtonPress(event){
    const playerPressed =event.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed==='Escape'){
        gameOver();
    }

    if(playerPressed===expectedAlphabet){
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore =  parseInt(currentScoreText);
        const newScore =currentScore+1;


        currentScoreElement.innerText=newScore;
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }else{
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        
        const newLife = currentLife-1;
        currentLifeElement.innerText=newLife;

        const updatedLifePercentage =(newLife/5)*100;
        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedLifePercentage}%,red)`

        if(newLife===0){
            gameOver();
        }

    };

});



function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    addBackgroundColorById(alphabet);

};
function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    const currentLifeElement = document.getElementById('current-life');
    currentLifeElement.innerText=3;

    const currentScoreElement = document.getElementById('current-score');
    currentScoreElement.innerText=0;

    continueGame();
};
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = document.getElementById('current-score');

    const playerScore = document.getElementById('last-score');

    playerScore.innerText=lastScore.innerText;

    const lastAlphabet = document.getElementById('current-alphabet');
    lastAlphabet.classList.remove('bg-orange-400');

    
    const elements = document.getElementsByClassName('playagain');
    for (let element of elements) {
        if (element.classList.contains('bg-orange-400')) {
            element.classList.remove('bg-orange-400');
        }
    }
    
    artBoard.style.background ="linear-gradient(#FFFFFFB3 100%,red)"


};


function modalOpen(event){
    if(event.clientY<20){
        modalBox.style.display = 'flex';

    }
}
function modalClose(){
    modalBox.style.display = 'none';
}
document.body.onmousemove = modalOpen;


