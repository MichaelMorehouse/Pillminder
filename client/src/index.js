import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import './index.css'
import reducers from './reducers'
import App from './components/App'
import Splash from './components/Splash'
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'
import Signout from './components/auth/Signout'
import Pillbox from './components/Pillbox'

const store = createStore(
    reducers,
    {
        auth: { authenticated: localStorage.getItem('token')}
    },
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={Splash} />
                <Route path="/signup" component={Signup} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin} />
                <Route path="/pillbox" component={Pillbox} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)