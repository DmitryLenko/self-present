
import * as taskActions from '../actions/task.actions'
import { ADD } from '../types/tasks.types'
import { InfernalValueTypes } from '../utils'
import { Task } from '../../core/task/task.types'

type TaskAction = ReturnType<InfernalValueTypes<typeof taskActions>>

type ToDoTasksStore = { [id: string]: Task };

export const addTaskReducer = (state: ToDoTasksStore = {}, action: TaskAction): ToDoTasksStore => {
  switch (action.type) {
    case ADD:
      return {...state, [action.payload.id]: { ...action.payload } }
    default:
      return state
  }
}
