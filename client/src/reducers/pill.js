import types from '../actions/types'

const initialState = {
  viewstate: '',
  pills: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PILLS:
      return {...state, pills: action.payload}
    case types.PILL_VIEWSTATE:
      return {...state, viewstate: action.payload}
    case types.PILL_ERROR:
      return {...state, errorMessage: action.payload}
    default:
      return state
  }
}
