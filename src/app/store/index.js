import React, { createContext, useContext, useReducer } from 'react'

const AppStateContext = createContext()
const AppActionsContext = createContext()
const AppDispatchContext = createContext()

const initialState = {
  user: {
    firstName: 'Doggo',
  }
}

function AppProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useActions(state, dispatch)

  return (
    <AppStateContext.Provider value={state}>
      <AppActionsContext.Provider value={actions}>
        <AppDispatchContext.Provider value={dispatch}>
          {children}
        </AppDispatchContext.Provider>
      </AppActionsContext.Provider>
    </AppStateContext.Provider>
  )
}

const SET_USER_DATA = 'SET_USER_DATA'

function reducer (state, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, user: action.payload}
    default:
      return state
  }
}

function useActions (state, dispatch) {
  return {
    setUserData: (userData) => dispatch({ type: SET_USER_DATA, payload: userData }),
  }
}

function useApp () {
  return {
    state: useContext(AppStateContext),
    actions: useContext(AppActionsContext),
    dispatch: useContext(AppDispatchContext),
  }
}

export {
  AppProvider,
  useApp,
}
