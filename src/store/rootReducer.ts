import { combineReducers } from 'redux'
import { countReducer as count } from './reducers/count.reducer'


export const rootReducer = combineReducers({
  count,
})


export type RootState = ReturnType<typeof rootReducer>
