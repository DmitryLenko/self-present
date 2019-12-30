export type CountType = number

export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

export interface Increment {
  type: typeof INCREMENT;
  payload: CountType;
}

export interface Decrement {
  type: typeof DECREMENT;
  payload: CountType;
}

export type CountActionTypes = Increment | Decrement
