import { SET_PROGRESS } from "../actions/types"
import initialState from '../initialState'

export default function loadingBar(state = initialState, action) {
  switch (action.type) {
    case SET_PROGRESS:
      state.progress = action.payload

      return {...state}

    default:
      return state
  }
}