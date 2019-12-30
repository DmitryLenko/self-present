import { CountType, INCREMENT, DECREMENT } from '../types/count.types'

export const increment = (amount: CountType = 1) => ({
  type: INCREMENT,
  payload: amount,
} as const)

export const decrement = (amount: CountType = 1) => ({
  type: DECREMENT,
  payload: amount,
} as const)

