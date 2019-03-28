import React from "react";
import {Provider} from 'react-redux' //react component which communicate directly through 'connect' function with componenets
import {applyMiddleware, createStore} from 'redux'
import reducers from 'reducers'

import reduxPromise from 'redux-promise'
//it is to make component more testable when using Redux. Now I can just wrapped
// tested component in <Root>
export default ({children, initialState = {}}) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise));

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}