/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//This class sets initial properties in the game and calls createPhrases method
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
        this.createPhrases() 
    }
    // Array of Phrases that get added onto the phrases empty array
    createPhrases(){
        const setPhrases = [
            'Phrase one',
            'Phrase two',
            'Phrase three',
            'Phrase four',
            'Phrase five'
        ]
        // Goes through each String in the setPhrases array and adds them to the phrases array
        setPhrases.forEach(p => {
            this.phrases.push(p)
            return this.phrases   
            // dont know if i need this line
        })
    }
    // Selects a random phrase from the phrase array
    getRandomPhrase(){
        const randomNumber = Math.floor(Math.random()* 5);
        let randomPhrase = this.phrases[randomNumber]
        return randomPhrase;
    }
    // Starts game by selecting a random phrase and displaying it to the user
    startGame() {
        const overlay = document.querySelector('#overlay')
        this.activePhrase = this.getRandomPhrase();
        overlay.style.visibility = "hidden";
        
    }
}

