function hideElementById(elementId){
    const element1 = document.getElementById(elementId);
    element1.classList.add('hidden');

};
function showElementById(elementId){
    const element2 = document.getElementById(elementId);
    element2.classList.remove('hidden');
};
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    return alphabets[index];
};
function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
};
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
};