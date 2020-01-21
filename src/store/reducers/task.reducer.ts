
import { ADD, REMOVE, COPY } from '../types/tasks.types'
import { Action } from '../../types/actions.types'
import { Task } from '../../types/tasks.types'

type TaskAction = Action<typeof ADD | typeof REMOVE | typeof COPY, Task>

export const countReducer = (state = {}, action: TaskAction): {} => {
  const { type, payload } = action
  switch (type) {
    case ADD:
      return {...state, [payload.id]: { ...payload } }
    default:
      return state
  }
}
