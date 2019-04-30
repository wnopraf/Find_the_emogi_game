import { h } from 'hyperapp'
import './Result.scss'

export default ({result}) => {
  if (result === 'start') {
    return ''
  } else {
    return <div class={'result ' + (result === 'win' ? 'win' : 'lose')}>
      <h1>you {result === 'win' ? 'win' : 'lose'} <span class='emogi-result'>{result === 'win' ? '😜' : '😭'}</span></h1>

    </div>
  }
}
