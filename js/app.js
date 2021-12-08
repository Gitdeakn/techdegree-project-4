let game;
const startGameButton = document.querySelector('#btn__reset');

startGameButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    const keys = document.querySelectorAll('.key')
    keys.forEach(element => element.addEventListener('click', (e) => {
        game.handleInteraction(e.target)  
    }));
});


