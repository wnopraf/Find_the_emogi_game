
const board = null
const hiddenEmogi = {}
const tries = {
  success: 0,
  fail: 0,
  total: 0
}

const games = {
  'total games': 0,
  'winned games': 0,
  'lost games': 0
}
// a modal dialog that appear at the beginning of the game and after each game ending showing play stats
const modal = true
const result = 'start'

export default {
  board,
  hiddenEmogi,
  tries,
  games,
  modal,
  result
}
