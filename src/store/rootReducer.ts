import { combineReducers } from 'redux'
import { tasksReducer as tasks } from './reducers/task.reducer'


export const rootReducer = combineReducers({
  tasks,
})


export type RootState = ReturnType<typeof rootReducer>
