import React, { useCallback } from 'react'
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from '../store/actions/count.actions'
import { Increment, Decrement } from '../store/types/count.types'
import { getCount } from '../store/selectors/count.selectors'

import styles from './app.scss'

import { TodoItem } from './item/item'

const INCREMENT_AMOUNT = 1

const incrementOne = increment(INCREMENT_AMOUNT)
const decrementOne = decrement(INCREMENT_AMOUNT)

// const customHook = (action) => {
//   const dispatch = useDispatch()
//   return useCallback(
//     (): ReturnType<typeof action> => dispatch(action),
//     [dispatch]
//   )
// }

// export const App: React.FC = () => {

//   const count  = useSelector(getCount)

//   const incrementCounter = customHook(incrementOne)

//   const decrementCounter = customHook(decrementOne)

//   return (
//     <div className={styles.test}>
//       <div>{count}</div>
//       <button onClick={incrementCounter}>increment</button>
//       <button onClick={decrementCounter}>decrement</button>
//     </div>
//   )
// }

const data = [
  {
    content: 'simple',
    id: 'asd3d'
  },
  {
    content: 'countable',
    countBeforeDone: 3,
    id: 'qew5'
  },
]

export const App: React.FC = () => {
  const addTask = useCallback(
    () => console.log('add'),
    []
  )
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.stats}>
        <p className={styles.statsItem}>Done tasks: 0</p>
        <p className={styles.statsItem}>Active tasks: 0</p>
      </div>
      <ul className={styles.tasksListWrapper}>
        {data.map(
          item => <TodoItem key={item.id} itemId={item.id} content={item.content} countBeforeDone={item.countBeforeDone || 1} className={styles.taskItemWrapper} />
        )}
      </ul>
      <button onClick={addTask}>add</button>
    </main>
  )
}
