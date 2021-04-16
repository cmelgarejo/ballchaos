var maxBalls = 100;
var Xmin = 0;
var Xmax = window.innerWidth;
var Ymin = 0;
var Ymax = window.innerHeight;
var balls = [ballFactory(false)];

function ballFactory(clone) {
  var ballElem = document.getElementById('ball');
  if (clone) ballElem = document.getElementById('ball').cloneNode(false);
  ballElem.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.appendChild(ballElem);
  return {
    ball: ballElem,
    width: 100,
    height: 100,
    velocity: 10,
    positionX: Math.floor(Math.random() * Xmax),
    positionY: Math.floor(Math.random() * Ymax),
  };
}

function moveBall(ball) {
  const ballReverseX = ball.reverseX ? -1 : 1;
  const ballReverseY = ball.reverseY ? -1 : 1;
  ball.positionX += ball.velocity * ballReverseX;
  ball.positionY += ball.velocity * ballReverseY;
  if (ball.positionX >= Xmax - ball.width || ball.positionX <= Xmin - ball.width) ball.reverseX = !ball.reverseX;
  if (ball.positionY <= Ymin - ball.height || ball.positionY >= Ymax) ball.reverseY = !ball.reverseY;
  ball.ball.style.left = ball.positionX + ball.width + 'px';
  ball.ball.style.top = ball.positionY - ball.height + 'px';
  ball.ball.style.height = ball.height + 'px';
  ball.ball.style.width = ball.width + 'px';
}

function main() {
  const rng = Math.floor(Math.random() * 10);
  if (rng > 8 && balls.length < maxBalls) {
    balls.push(ballFactory(true));
  }
  for (ballObj of balls) {
    moveBall(ballObj);
  }
}

setInterval(main, 40);
