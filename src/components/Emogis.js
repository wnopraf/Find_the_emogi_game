import { h } from 'hyperapp'
import './Emogis.scss'
export default ({actions, state}) => {
  const emogiBoard = state.board.map((e, i) => {
    return <EmogiFrame emogi={e.emogi} show={actions.checkWin} id={e.id} key={i} />
  })
  return <div class='board'>
    {emogiBoard}
    <div class='emogi-item hidden-emogi'>
      {state.hiddenEmogi.emogi}
      <span className='emogi-text'> Find others like me!!!</span>
    </div>
    <div class='tries'>{4 - state.tries.total} tries left</div>
  </div>
}

const EmogiFrame = ({emogi, show, id, key}) => <div class='emogi-item' onclick={show} data-id={id} key={key}>
  <div className='emogi-main'>
    {emogi}
  </div>
  <div className='emogi-cover'>
        ?
  </div>

</div>
