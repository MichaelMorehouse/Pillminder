import axios from 'axios'
import types from './types'

function getUserToken() {
    var token = localStorage.getItem('pillminder-token')
    if (token) {
        return token = "Bearer " + token
    }
    return ''
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
        const response = await axios({
            method: 'post',
            url: 'api/pills',
            headers: { 'Authorization': getUserToken() },
            data: formProps
        })
        console.log(response)
        callback()
    } catch (err) {
        dispatch({type: types.PILL_ERROR, payload: 'Error creating pill'})
    }
}

export const getPills = () => async dispatch => {
    try {
        const response = await axios({
            method: 'get',
            url: 'api/pills',
            headers: { 'Authorization': getUserToken() },
        })
        dispatch({type: types.GET_PILLS, payload: response.data})
    } catch (err) {
        dispatch({type: types.PILL_ERROR, payload: 'Error getting pills'})
    }
}