class Snake {
  constructor() {
    this.context = canvas.getContext('2d');
    this.body = [];
    this.body[0] = {
      x: 150,
      y: 150
    };
    this.posX = 150;
    this.posY = 150;
    this.width = 5;
    this.height = 5;
    this.dirX = 0;
    this.dirY = 0;
    this.food = {};
  }

  setDir(x, y) {
    this.dirX = x * 5;
    this.dirY = y * 5;
  }

  move() {
    setTimeout(() => {
      requestAnimationFrame(this.move.bind(this));
      this.context.clearRect(0, 0, innerWidth, innerHeight);
      this.posX += this.dirX;
      this.posY += this.dirY;
      this.body.unshift({
        x: this.posX,
        y: this.posY
      });
      this.body.pop();

      this.show();
      this.eat();
      this.endGame();

    }, 200);
  }

  grow() {
    const head = this.body[this.body.length - 1];
    this.body.push(head);
    this.showFood();
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      this.context.fillRect(
        this.body[i].x,
        this.body[i].y,
        this.width,
        this.height
      );
    }

    this.context.fillRect(this.food.x, this.food.y, 5, 5);
  }

  showFood() {
    const randomNumber = () => {
      const numbers = [];
      for (let i = 0; i < 301; i += 5) {
        numbers.push(i);
      }
      return numbers[Math.floor(Math.random() * 61)];
    }

    this.food.x = randomNumber();
    this.food.y = randomNumber();
  }

  eat(pos) {
    const x = this.body[0].x;
    const y = this.body[0].y;

    if (x == this.food.x && y == this.food.y) {
      this.grow();
    }
  }

  endGame() {
    const x = this.body[0].x;
    const y = this.body[0].y;
    const headPos = this.body.filter(pos => pos.x == x && pos.y == y);

    if (x > 295 || x < 0 || y > 295 || y < 0) {
      console.log('end game');
    } else if (headPos.length > 1) {
      console.log('end game');
    }
  }
}
