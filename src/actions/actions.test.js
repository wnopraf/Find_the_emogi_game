
import actions from '.'
import state from '../state'
import { shuffle } from '../utils'

test.skip('suffle', () => {
  expect(shuffle(['a', 'b', 'c', 'd', 'e', 'f'])).toMatchSnapshot()
})

test('state change', () => {
  actions.showModal()
  expect(state.modal).toBe(false)
  console.log(state, 'post-mut state')
})
