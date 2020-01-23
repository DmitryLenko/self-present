import uniqid from 'uniqid'
import { Task } from './task.types'

export const makeTask = (): Task => ({
  id: uniqid(),
  content: 'Hello',
  countBeforeDone: Math.round(Math.random() * 10)
})
