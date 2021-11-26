/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const phrase = new Phrase('Life is like a box of chocaltes');


// Sets up the game object
const game = new Game();
console.log(game)
// Sets up the phrase object by selecting one of the random phrases from the game object
const phrase = new Phrase(game.getRandomPhrase())
phrase.addPhraseToDisplay()


const startGameBtn = document.querySelector('#btn__reset')
startGameBtn.addEventListener('click', function (){
    game.startGame()
})

// phrase.checkLetter();