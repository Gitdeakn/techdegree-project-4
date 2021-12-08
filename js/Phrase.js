class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // Display phrase on game board
    addPhraseToDisplay() {
        const ul = document.querySelector('ul');
        let letters = this.phrase.split('');
        letters.forEach(letter => {
            const li = document.createElement('li');
            if (letter !== ' ') {
                li.classList.add(letter, 'hide', 'letter');
                li.textContent = letter;
                ul.append(li);
            }
            else {
                li.classList.add('space')
                li.textContent = letter;
                ul.append(li);
            }
        })
    }
    // Checks if passed letter is in phrase
    // @param (string) letter - Letter to check
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    // Displays passed letter on screen after a match is found
    //@param (string) letter - Letter to display
    showMatchedLetter(letter) {
        const phraseLetters = document.querySelectorAll('.letter')
        phraseLetters.forEach(phraseLetter => {
            if (phraseLetter.textContent === letter) {
                phraseLetter.classList.add('show')
                phraseLetter.classList.remove('hide')
            }
        })
    }
}