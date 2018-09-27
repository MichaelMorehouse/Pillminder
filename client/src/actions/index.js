import axios from 'axios'
import types from './types'

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(
            'api/signup',
            formProps
        )
        dispatch({ type: types.AUTH_USER, payload: response.data.token })
        localStorage.setItem('token', response.data.token)
        callback()
    } catch (err) {
        dispatch({type: types.AUTH_ERROR, payload: 'Email in use'})
    }
}

export const signin = (formProps, callback) => async dispatch => {
    try {

        const response = await axios.post(
            'api/signin', 
            formProps
        )
        dispatch({ type: types.AUTH_USER, payload: response.data.token })

        localStorage.setItem('token', response.data.token)
        callback()
    } catch (err) {
        dispatch({type: types.AUTH_ERROR, payload: 'Invalid login credentials'})
    }
}

export const signout = () => {
    localStorage.removeItem('token')

    return {
        type: types.AUTH_USER,
        payload: ''
    }
}

export const pillViewstate = viewstate => {
    return {
        type: types.PILL_VIEWSTATE,
        payload: viewstate
    }
}

export const createPill = (formProps, callback) => async dispatch => {
    try {
        console.log(formProps)
    } catch (err) {
        dispatch({type: types.PILL_ERROR, payload: 'Error creating pill'})
    }
}