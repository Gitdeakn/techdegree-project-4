/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        
    }   
    addPhraseToDisplay(){
        const myList = document.getElementsByTagName('ul')[0]
        for (let i = 0; i < this.phrase.length; i++){
            let newListItem = document.createElement('li');
            newListItem.textContent = this.phrase[i];
            if (newListItem.textContent === ' '){
                newListItem.className = 'space'
            } else {
                newListItem.classList.add('hide', 'letter', this.phrase[i])
            }
            myList.appendChild(newListItem);              
        }
    }  
}

