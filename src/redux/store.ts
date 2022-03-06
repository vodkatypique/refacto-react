// This file has to be left untouched

import { createStore } from 'redux'

import rootReducer from './reducer'

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  return createStore(rootReducer)
}
