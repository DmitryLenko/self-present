import { combineReducers } from 'redux'
import { addTaskReducer as tasksToDo } from './reducers/addTask.reducer'


export const rootReducer = combineReducers({
  tasksToDo,
})


export type RootState = ReturnType<typeof rootReducer>
