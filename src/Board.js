import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Square from './Square'
import Knight from './Knight'

import BoardSquare from './BoardSquare'

import {moveKnight,canMoveKnight} from "./Game"

function renderSquare(i, knightPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)
  
  function handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY)
    }
  }

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }} onClick={() => handleSquareClick(x, y)} >
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}


function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
      return <Knight />
    }
  }

export default function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <DndProvider backend={HTML5Backend}>
    <div
      style={{
        width: '100vh',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {squares}
    </div>
    </DndProvider>
  )
}