import Game from './game.js';
import Background from './background.js';

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('canvas');
  let game = new Game(canvas)
  game.run();
})
