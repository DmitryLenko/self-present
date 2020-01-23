import { ADD, REMOVE, COPY } from '../types/tasks.types'
import { Task } from '../../core/task/task.types'

export const add = (item: Task) => ({
  type: ADD,
  payload: item
} as const)

export const remove = (id: string) => ({
  type: REMOVE,
  payload: id,
} as const)

export const copy = (id: string) => ({
  type: COPY,
  payload: id,
} as const)

