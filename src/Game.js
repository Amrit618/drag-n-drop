// let knightPosition = [0, 0]
// let observer = null

// function emitChange() {
//   observer(knightPosition)
// }

// export function observe(o) {
//   if (observer) {
//     throw new Error('Multiple observers not implemented.')
//   }

//   observer = o
//   emitChange()
// }

// export function moveKnight(toX, toY) {
//   knightPosition = [toX, toY]
//   emitChange()
// }

// export function canMoveKnight(toX, toY) {
//     const [x, y] = knightPosition
//     const dx = toX - x
//     const dy = toY - y
  
//     return (
//       (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
//       (Math.abs(dx) === 1 && Math.abs(dy) === 2)
//     )
//   }

let knightPosition = [0,0]
let observers = []
function emitChange() {
  observers.forEach((o) => o && o(knightPosition))
}
export function observe(o) {
  observers.push(o)
  emitChange()
  return () => {
    observers = observers.filter((t) => t !== o)
  }
}
export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition
  const dx = toX - x
  const dy = toY - y
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}
export function moveKnight(toX, toY) {
  knightPosition = [toX, toY]
  emitChange()
}
