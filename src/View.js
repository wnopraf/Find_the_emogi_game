import { h } from 'hyperapp' // eslint-disable-line
import Emogis from './components/Emogis'
import Modal from './components/Modal'

export default (state, actions) => (
  <div class='wrapper-box'>
    {console.log(state, 'state')}
    {state.modal && <Modal state={state} actions={actions} />}
    {state.board && <Emogis state={state} actions={actions} />}
  </div>
)
