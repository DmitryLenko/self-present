import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from '../store/actions/count.actions'
import { Increment, Decrement } from '../store/types/count.types'
import { getCount } from '../store/selectors/count.selectors'

import styles from './app.scss'

const INCREMENT_AMOUNT = 1

const incrementOne = increment(INCREMENT_AMOUNT)
const decrementOne = decrement(INCREMENT_AMOUNT)

export const App: React.FC = () => {

  const count  = useSelector(getCount)
  const dispatch = useDispatch()

  const incrementCounter = useCallback(
    (): Increment => dispatch(incrementOne),
    [dispatch]
  )

  const decrementCounter = useCallback(
    (): Decrement => dispatch(decrementOne),
    [dispatch]
  )

  return (
    <div className={styles.test}>
      <div>{count}</div>
      <button onClick={incrementCounter}>increment</button>
      <button onClick={decrementCounter}>decrement</button>
    </div>
  )
}
