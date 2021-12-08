class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases()
        this.activePhrase = null;
    }
    // Creates phrases for use in the game returns an array of phrases
    createPhrases() {
        const arrayOne = ['Phrase One', 'Phrase Two', 'Phrase Three', 'Phrase Four', 'Phrase Five'];
        const arrayTwo = [];
        arrayOne.forEach(phrase => arrayTwo.push(new Phrase(phrase)));
        return arrayTwo;
    }
    // Selects random phrase from phrases property
    // return {Object} Phrase object chosen to be used
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomNumber];
    }
    // Begins game by selecting a random phrase and displaying it to user
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = game.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    // This takes in the button clicked by the player 
    // If letter clicked it shows letter on the gameboard
    // If letter clicked does not match is removes a life from the gameboard

    handleInteraction(button) {

        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent)
            console.log('letter matched');
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong')
            this.removeLife()
        }

    }

    //     // Checks to see if the player has revealed all of the letters
    checkForWin() {
        const phraseLetters = document.querySelectorAll('.hide', '.letter')
        if (phraseLetters.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    // Remove life from the scoreboard 
    removeLife() {
        if (this.missed < 4) {
            const hearts = document.querySelectorAll('.tries')
            const heart = hearts[this.missed]
            let img = heart.children[0]
            let src = img.getAttribute('src')
            if (src === 'images/liveHeart.png') {
                img.removeAttribute('images/liveHeart.png')
                img.setAttribute('src', 'images/lostHeart.png')
            }
            this.missed++;
        } else {
            img.removeAttribute('images/lostHeart.png')
            img.setAttribute('src', 'images/liveHeart.png')
            this.gameOver(false)
        }
    }

    // Displays start screen with a message based on win or loss
    gameOver(gameWon) {
        const ul = document.querySelector('ul');
        const phraseLetters = document.querySelectorAll('.key');
        const overlay = document.querySelector('#overlay');
        const h1 = document.querySelector('#game-over-message')
        if (gameWon) {
            overlay.style.display = 'flex'
            h1.textContent = 'You Won Nice Job!'
            ul.innerHTML = '';
            console.log(this.missed)
            phraseLetters.forEach(letter => {
                letter.classList.remove('chosen', 'wrong')
                letter.disabled = false;
            })

        } else {
            overlay.style.display = 'flex'
            h1.textContent = 'Sorry, better luck next time!'
            ul.innerHTML = '';
            console.log(this.missed)
            phraseLetters.forEach(letter => {
                letter.classList.remove('chosen', 'wrong')
                letter.disabled = false;
            })
        }
    }
}