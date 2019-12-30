
import { INCREMENT, DECREMENT, CountType, CountActionTypes } from '../types/count.types'

export const countReducer = (state = 0, action: CountActionTypes): CountType => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload
    case DECREMENT:
      return state - action.payload
    default:
      return state
  }
}
