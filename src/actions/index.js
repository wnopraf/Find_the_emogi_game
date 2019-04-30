import { shuffle, randomize } from '../utils'
import emogis from '../model'

function checkWin (event, fails) {
  console.log('chekwin')
  const elm = event.currentTarget
  if (elm.dataset.clicked) return
  elm.setAttribute('data-clicked', true)
  const uncover = () => {
    const cover = elm.querySelector('.emogi-cover')
    cover.style.transform = 'rotateY(90deg)'
  }
  uncover()

  return (state, actions) => {
    if (elm.getAttribute('data-id') === state.hiddenEmogi.id) {
      // run gameEnds action fail
      const { tries } = {...actions.triesCount('success')}

      if (tries.success === 3) {
        // run gameEnds action pass
        return setTimeout(() => {
          return {...actions.showModal(), ...actions.gameEnds('win'), tries: {...tries}}
        }, 1300)
      }

      return {tries: {...tries}}
    } else {
      const {tries} = {...actions.triesCount('fail')}
      if (tries.fail > 1) {
        // ends
        return setTimeout(() => {
          return {...actions.showModal(), ...actions.gameEnds('lose'), tries: {...tries}}
        }, 1300)
      }
      return {tries: {...tries}}
    }
  }
}

const gameEnds = (result) => (state, actions) => {
  let newGamesState
  switch (result) {
    case 'win':
      newGamesState = {...state.games}
      newGamesState['total games'] += 1
      newGamesState['winned games'] += 1
      return {games: newGamesState, result: 'win'}

    case 'lose':
      newGamesState = {...state.games}
      newGamesState['total games'] += 1
      newGamesState['lost games'] += 1
      return {games: newGamesState, result: 'lose'}

    default:
      return {games: {...state.games}}
  }
}
const triesCount = value => (state, actions) => {
  switch (value) {
    case 'fail':
      return {tries: {...state.tries, fail: state.tries.fail + 1, total: state.tries.total + 1}}
    case 'success':
      return {tries: {...state.tries, success: state.tries.success + 1, total: state.tries.total + 1}}

    default:
      return {tries: {...state.tries, total: state.tries + 1}}
  }
}
const triesReset = value => (state, actions) => {
  return {tries: {
    fail: 0,
    success: 0,
    total: 0
  }}
}
const showModal = value => (state, actions) => {
  return {modal: !state.modal}
}
const getEmogi = () => ({hiddenEmogi: emogis[randomize(emogis)]})

const keepPlaying = () => (state, actions) => {
  return {...actions.getEmogi(), ...actions.shuffleBoard(emogis), ...actions.triesReset(), ...actions.showModal()}
}
const gameReset = value => (state, actions) => {
  return {
    ...actions.getEmogi(),
    ...actions.triesReset(),
    ...actions.shuffleBoard(emogis),
    ...actions.showModal(),
    result: 'start',
    games: {
      'total games': 0,
      'winned games': 0,
      'lost games': 0
    }

  }
}
export const shuffleBoard = value => (state, actions) => {
  const board = shuffle(value)
  let i = 0
  while (i < 3) {
    board[randomize(board)] = state.hiddenEmogi
    i += 1
  }

  return { board }
}

export default {
  shuffleBoard,
  gameReset,
  keepPlaying,
  showModal,
  triesReset,
  triesCount,
  gameEnds,
  checkWin,
  getEmogi
}
