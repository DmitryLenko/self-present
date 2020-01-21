import { RootState } from '../rootReducer'
import { Task } from '../../types/tasks.types'

export const getCount = (state: RootState): Task[] => state.tasks
