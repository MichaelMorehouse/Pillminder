import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import pill from './pill'

export default combineReducers({
    auth,
    form: formReducer,
    pill
})