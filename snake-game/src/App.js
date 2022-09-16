import { useEffect, useState } from 'react';
import './App.css';
import Snake from './Snake';
import Food from './Food';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y];
}

function App() {

  const [snakeDots, setSnakeDots] = useState([[0,0],[2,0]]);
  const [food, setFood] = useState(getRandomCoordinates());
  const [direction, setDirection] = useState('RIGHT');
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    // setFood(getRandomCoordinates());
    checkifOutBorders();
    checkIfCollapsed();
    checkIfEat();
  },[snakeDots,direction]);

  useEffect(() => {
    let time = setInterval(moveSnake, speed);
    document.addEventListener("keydown", onkeydown);

    return () => {
      clearInterval(time);
      document.removeEventListener("keydown", onkeydown);
    }
  });

  const checkifOutBorders = () => {
    let head = snakeDots[snakeDots.length - 1];
    if(head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      onGameover();
    }
  }

  const checkIfEat = () => {
    let head = snakeDots[snakeDots.length - 1];
    let foodVal = food;
    if(head[0] === foodVal[0] && head[1] === foodVal[1]) {
      setFood(getRandomCoordinates());
      enLargeSnake();
      increaseSpeed();
    }
  }

  const checkIfCollapsed = () => {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if(head[0] === dot[0] && head[1] === dot[1]) {
        onGameover();
      }
    })
  }

  const enLargeSnake = () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([]);
    setSnakeDots(newSnake);
  }

  const increaseSpeed = () => {
    if(speed > 10) {
      setSpeed(speed - 10);
    }
  }

  const onGameover = () => {
    alert(`Gameover, snake length is ${snakeDots.length}`);
    setFood([6,8]);
    setDirection('RIGHT');
    setSnakeDots([[0,0],[0,2]]);
    setSpeed(200);
  }

  const onkeydown = (e) => {
    console.log(e)
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        setDirection('UP')
        break;
      case 40:
        setDirection('DOWN')
        break;
      case 37:
        setDirection('LEFT')
        break;
      case 39:
        setDirection('RIGHT')
        break;
    }
  }

  const moveSnake = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];
    // console.log(dots);
    switch(direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    setSnakeDots(dots);
  }

  return (
    <div className="game-area">
      <Snake snakeDots={snakeDots} />
      <Food dot={food} />
    </div>
  );
}

export default App;
