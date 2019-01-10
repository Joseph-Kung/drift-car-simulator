const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d');

c.fillStyle = 'white';
c.fillRect(100, 100, 50, 50)

