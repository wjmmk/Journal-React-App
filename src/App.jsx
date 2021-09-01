import React from 'react'
import { Provider } from 'react-redux';
import { store } from './Store/store';
import AppRouter from './Routes/AppRouter'

const App = () => {

    return (
        <Provider store = { store }>
           <AppRouter />
        </Provider>
    )
}

export default App
