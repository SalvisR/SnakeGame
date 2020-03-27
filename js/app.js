const canvas = document.querySelector('canvas');
canvas.width = 300;
canvas.height = 300;

const snake = new Snake();
snake.showFood();
snake.move();

window.addEventListener('keydown', (event) => {
  // Up
  if (event.keyCode === 38) {
    snake.setDir(0, -1);
  }
  // Down
  if (event.keyCode === 40) {
    snake.setDir(0, 1);
  }
  // Left
  if (event.keyCode === 37) {
    snake.setDir(-1, 0);
  }
  // Right
  if (event.keyCode === 39) {
    snake.setDir(1, 0);
  }

  // Space
  if (event.keyCode === 32) {
    snake.grow();
  }
});
