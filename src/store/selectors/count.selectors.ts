import { RootState } from '../rootReducer'
import { CountType } from '../types/count.types'

export const getCount = (state: RootState): CountType => state.count
