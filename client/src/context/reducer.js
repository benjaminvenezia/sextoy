import { TOGGLE_WELCOME, ADD_QUESTION_SUCCESS } from './actions'

import { initialState } from './appContext'

const reducer = (state, action) => {
  if (action.type === TOGGLE_WELCOME) {
    return {
      ...state,
      hello: !state.hello,
    }
  }

  if (action.type === ADD_QUESTION_SUCCESS) {
    return {
      ...state,
      questions: action.payload.questions,
    }
  }
  throw new Error(`no such action :${action.type}`)
}
export default reducer
