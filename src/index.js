import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('canvas');
  let game = new Game(canvas)

  document.getElementById('title').innerHTML = `Drift Car Simulator`;
  document.getElementById('description').innerHTML = `Use WASD to move your car around. Drift and score as many points as possible within 60 seconds. You will lose points if you hit any obstacles!`;
  document.getElementById('play').innerHTML = 'Play';

  document.getElementById('play').addEventListener('click', (e) => {
    document.getElementById('welcome').style.display = 'none';
    if (game.gameDone === true) {
      game = new Game(canvas)
    }
    document.getElementById('background').style.display = 'none';
    game.setTimers();
    game.run();
  })
})
