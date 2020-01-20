import React, { useCallback, memo } from 'react'

import styles from './item.scss'

import { CountingBtn } from './countingBtn/countingBtn'
import { SimpleBtn } from './simpleBtn/simpleBtn'

import { ItemProps } from './types'

export const TodoItem: React.FC<ItemProps> = memo(function TodoItem({ content, itemId, countBeforeDone = 1 }) {
  const copyTask = useCallback(
    () => {
      console.log('copy', itemId)
    },
    [itemId, content, countBeforeDone]
  )

  const deleteTask = useCallback(
    () => {
      console.log('delete', itemId)
    },
    [itemId]
  )

  return (
    <li className={styles.itemWrapper}>
      <div className={styles.content}>
        {content}
      </div>
      {countBeforeDone > 1 ?
        <CountingBtn itemId={itemId} countBeforeDone={countBeforeDone} /> :
        <SimpleBtn itemId={itemId} />
      }
      <div>
        <button onClick={copyTask}>copy task</button>
      </div>
      <div>
        <button onClick={deleteTask}>delete</button>
      </div>
    </li>
  )
})
