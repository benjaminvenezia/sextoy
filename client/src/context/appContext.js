import React, { useState, useReducer, useContext } from 'react'
import reducer from './reducer'

import { TOGGLE_WELCOME } from './actions'

export const initialState = {
  question: [],
  hello: true,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // const [state, setState] = useState(initialState)
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleWelcome = () => {
    dispatch({ type: TOGGLE_WELCOME })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleWelcome,
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
