import { SET_MODE } from '../actions/actionTypes'
import { MODES } from '../constants'

const initialState = {
  mode: MODES.ACTIVE,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_MODE: {
      return {
        ...state,
        mode: action.mode
      }
    }

    default:
      return state
  }
};
