import React ,{useEffect,useState}from 'react';
import Board from './Board';
import {observe} from "./Game"
function Chess() {
  const [knightPos, setKnightPos] = useState([])
  // the observe function will return an unsubscribe callback
  useEffect(() => observe((newPos) => setKnightPos(newPos)))

  // const board = observe((knightPosition) =>      <Board knightPosition={knightPosition} />)
  return (
    <div className="Chess">
      <Board knightPosition={knightPos} />
    </div>
  );
}

export default Chess;
