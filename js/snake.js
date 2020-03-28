class Snake {
  constructor() {
    this.context = canvas.getContext('2d');
    this.request = null;
    this.body = [];
    this.body[0] = {
      x: 150,
      y: 150
    };
    this.pos = {
      x: 150,
      y: 150
    };
    this.width = 5;
    this.height = 5;
    this.dir = {
      x: 0,
      y: 0
    };
    this.food = {};
    this.score = 0;
    this.scoreEl = null;
    this.speed = 150;
  }

  setDir(x, y) {
    this.dir.x = x * 5;
    this.dir.y = y * 5;
  }

  move() {
    setTimeout(() => {
      this.request = requestAnimationFrame(this.move.bind(this));
      this.context.clearRect(0, 0, innerWidth, innerHeight);
      this.pos.x += this.dir.x;
      this.pos.y += this.dir.y;
      this.body.unshift({
        x: this.pos.x,
        y: this.pos.y
      });
      this.body.pop();

      this.endGame();
      this.update();
      this.eat();
    }, this.speed);
  }

  update() {
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

  grow() {
    const head = this.body[this.body.length - 1];
    this.body.push(head);
    this.showFood();
  }

  showFood() {
    const randomNumber = () => {
      const numbers = [];
      for (let i = 0; i < 296; i += 5) {
        numbers.push(i);
      }
      return numbers[Math.floor(Math.random() * 60)];
    };


    this.food.x = randomNumber();
    this.food.y = randomNumber();
  }

  eat(pos) {
    const x = this.body[0].x;
    const y = this.body[0].y;

    if (x == this.food.x && y == this.food.y) {
      this.grow();
      this.setScore();
    }
  }

  endGame() {
    const x = this.body[0].x;
    const y = this.body[0].y;
    const headPos = this.body.filter(pos => pos.x == x && pos.y == y);

    if (x > 295 || x < 0 || y > 295 || y < 0) {
      console.log('Game Over!');
      cancelAnimationFrame(this.request);
    } else if (headPos.length > 1) {
      console.log('Game Over!');
      cancelAnimationFrame(this.request);
    }
  }

  getScoreEl(el) {
    this.scoreEl = el;
  }

  setScore() {
    this.score += 5;
    this.scoreEl.textContent = this.score;
    if (this.score == 30) {
      this.speed = 130;
    }
    if (this.score == 70) {
      this.speed = 110;
    }
    if (this.score == 90) {
      this.speed = 100;
    }
    if (this.score == 120) {
      this.speed = 90;
    }
    if (this.score == 150) {
      this.speed = 80;
    }
    if (this.score == 170) {
      this.speed = 70;
    }
    if (this.score == 200) {
      this.speed = 60;
    }
  }
}
