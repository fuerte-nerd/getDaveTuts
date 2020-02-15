import { TOGGLE_NAVBAR } from "../types"

const initialState = {
  isOpen: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    default:
      return state
  }
}
