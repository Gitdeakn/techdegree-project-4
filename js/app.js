let game;
const startGameButton = document.querySelector('#btn__reset');

// When start button is clicked we update game to the Game class and call startGame
startGameButton.addEventListener('click', () => {
    game = new Game();
    game.startGame(); 
});

// Waits for user to click a phrase letter key then calls the handleInteraction method on the game object
const keys = document.querySelectorAll('.key')
    keys.forEach(element => element.addEventListener('click', (e) => {
        game.handleInteraction(e.target)  
    }));


