import { TOGGLE_WELCOME } from './actions'

import { initialState } from './appContext'

const reducer = (state, action) => {
  if (action.type === TOGGLE_WELCOME) {
    return {
      ...state,
      hello: !state.hello,
    }
  }
  throw new Error(`no such action :${action.type}`)
}
export default reducer
