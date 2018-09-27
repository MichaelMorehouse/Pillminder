import types from '../actions/types'

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PILL_VIEWSTATE:
      return {...state, viewstate: action.payload}
    case types.PILL_ERROR:
      return {...state, errorMessage: action.payload}
    default:
      return state
  }
}
