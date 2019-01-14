import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('canvas');
  let game = new Game(canvas)

  document.getElementById('title').innerHTML = `Drift Maniac`;
  document.getElementById('description').innerHTML = `Use WASD to move your car around. Drift and score as many points as possible in 60 seconds. You will lose points if you hit any Obstacles!`;
  document.getElementById('play').innerHTML = 'Play';

  document.getElementById('play').addEventListener('click', (e) => {
    document.getElementById('welcome').hidden = true;
    game.run();
  })
})
