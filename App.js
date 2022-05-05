import React, { useState, useEffect, Component } from 'react'
import { applyMiddleware, compose, legacy_createStore as createStore} from 'redux'
import Navigate from './navigation/AppNavigator'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from './state/rootReducer'


const store = createStore(rootReducer, compose( applyMiddleware(thunk) ))

export default function App() { 
  
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>    
  )
}

