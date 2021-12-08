let game;
const startGameButton = document.querySelector('#btn__reset');

startGameButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    const keys = document.querySelectorAll('.key')
    console.log(keys);
    keys.forEach(element => element.addEventListener('click', (e) => {
        game.handleInteraction(e.target)
        console.log('handle fired')
        console.log('break')
    }));
});


