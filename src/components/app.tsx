import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTasksToDo, getDoneTask } from '../store/selectors/task.selectors'
import { add } from '../store/actions/task.actions'
import { makeTask } from '../core/task/generator'

import styles from './app.scss'

import { TodoItem } from './item/item'

export const App: React.FC = () => {
  const dispatch = useDispatch()
  const addTask = useCallback(
    (): ReturnType<typeof add> => dispatch(add(makeTask())),
    [dispatch]
  )
  const tasksToDo = useSelector(getTasksToDo)
  const doneTask = useSelector(getDoneTask)
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.stats}>
        <p className={styles.statsItem}>{`Done tasks: ${doneTask.length}`}</p>
        <p className={styles.statsItem}>{`Done tasks: ${tasksToDo.length}`}</p>
      </div>
      <ul className={styles.tasksListWrapper}>
        {tasksToDo.map(
          item => <TodoItem key={item.id} itemId={item.id} content={item.content} countBeforeDone={item.countBeforeDone || 1} className={styles.taskItemWrapper} />
        )}
      </ul>
      <button onClick={addTask}>add</button>
    </main>
  )
}
