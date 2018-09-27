import axios from 'axios'
import types from './types'

function getUserToken() {
    const token = "Bearer " + localStorage.getItem('pillminder-token')
    debugger
    return token
}

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(
            'api/signup',
            formProps
        )
        dispatch({ type: types.AUTH_USER, payload: response.data.token })
        localStorage.setItem('pillminder-token', response.data.token)
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

        localStorage.setItem('pillminder-token', response.data.token)
        callback()
    } catch (err) {
        dispatch({type: types.AUTH_ERROR, payload: 'Invalid login credentials'})
    }
}

export const signout = () => {
    localStorage.removeItem('pillminder-token')

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
        await axios({
            method: 'post',
            url: 'api/pills',
            header: { 'Authorization': getUserToken()},
            data: formProps
        })
        .then(response => {
            console.log(response)
            callback()
        })
        .catch(err=>console.log(err))
    } catch (err) {
        dispatch({type: types.PILL_ERROR, payload: 'Error creating pill'})
    }
}