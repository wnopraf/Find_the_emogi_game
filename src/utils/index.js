
const randomize = (array) => Math.floor(Math.random() * array.length)
const shuffle = (array, randomBoard = []) => {
  const randomItem = array[randomize(array)]
  console.log(randomBoard)
  if (randomBoard.length === array.length) {
    return randomBoard
  }

  if (randomBoard.includes(randomItem)) {
    shuffle(array, randomBoard)
  } else {
    randomBoard.push(randomItem)
    randomBoard = shuffle(array, randomBoard)
  }
  return randomBoard
}

export { randomize, shuffle }
