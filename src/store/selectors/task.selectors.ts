import { createSelector } from 'reselect'
import { addTaskReducer } from '../reducers/addTask.reducer'
import { RootState } from '../rootReducer'

const getTasksToDoStore = (state: RootState): ReturnType<typeof addTaskReducer> => state.tasksToDo

export const getTasksToDo = createSelector(
  getTasksToDoStore,
  tasksToDoStore => Object.values(tasksToDoStore),
)

export const getDoneTask = (): [] => []
