/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const myList = document.getElementsByTagName('ul')[0]
        for (let i = 0; i < this.phrase.length; i++) {
            let newListItem = document.createElement('li');
            newListItem.textContent = this.phrase[i];
            if (newListItem.textContent === ' ') {
                newListItem.className = 'space'
            } else {
                newListItem.classList.add('hide', 'letter', this.phrase[i])
            }
            myList.appendChild(newListItem);
        }
    }

    checkLetter() {
        const newListItemCollection = document.querySelectorAll('.hide');
        for (let i = 0; i < newListItemCollection.length; i++) {
            const letterClicked = game.lastSelectedLetter
            const phraseLetter = newListItemCollection[i].textContent;
            console.log(letterClicked);
            console.log(phraseLetter);
            console.log('----')
            if (letterClicked === phraseLetter) {
                console.log(true);
                return true;
            } 
        }

            console.log(false);
            return false;
        
    }
    showMatchedLetter() {
        console.log('matchedcalled')
        const newListItemCollection = document.querySelectorAll('.hide')
        for (let i = 0; i < newListItemCollection.length; i++) {
            if (game.lastSelectedLetter === newListItemCollection[i].textContent) {
                newListItemCollection[i].classList.remove('hide')
                newListItemCollection[i].classList.add('show')
                console.log('match')
            }
        }
    }
}






// const hearts = document.querySelectorAll('.tries');
                    // console.log(hearts)

// newListItemCollection[i].classList.remove('hide')
                        // newListItemCollection[i].classList.add('show')
                        // console.log('match')

// if (letterClicked !== phraseLetter){

                    //     let tries = 4;
                    //     hearts[0].classList.remove('tries');
                    //     tries -= 1;
                    //     console.log(tries);

                    // }