import React, { useState, useReducer, useContext } from 'react'
import reducer from './reducer'
import axios from 'axios'

import {
  TOGGLE_WELCOME,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_ERROR,
  ADD_TAG,
} from './actions'

export const initialState = {
  questions: [],
  tags: [],
  hello: true,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // const [state, setState] = useState(initialState)
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleWelcome = () => {
    dispatch({ type: TOGGLE_WELCOME })
  }

  const addQuestionTag = () => {
    dispatch({ type: ADD_TAG })
  }

  const getQuestion = (tags) => {
    try {
      // const { data } = await axios.post('/api/v1/getQuestionByTags', tags)
    } catch (error) {}
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleWelcome,
        getQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
