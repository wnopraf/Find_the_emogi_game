import { h } from 'hyperapp'
import Result from './Result'
import './Modal.scss'
const Stats = ({games}) => {
  return <div class='stats'>
    <ul>
      {Object.keys(games).map((e, i) => {
        return <li key={i}> <span class='stat__value'>{e}:</span> <span class='stat__name'>{games[e]}</span></li>
      })}
    </ul>

  </div>
}

export default ({state, actions}) => {
  return <div class='modal'>
    <Result result={state.result} />
    <div class='menu'>
      <div className='controls'>
        <button class='try' disabled={state.games['total games'] === 0} onclick={actions.keepPlaying}>Try again</button>
        <button class='start' onclick={e => {
          actions.gameReset()
        }}>Start game</button>
      </div>
      <Stats games={state.games} />

    </div>

  </div>
}
