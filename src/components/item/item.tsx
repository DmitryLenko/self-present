import React, { useCallback, memo } from 'react'
import cn from 'classnames'

import styles from './item.scss'

import { CountingBtn } from './countingBtn/countingBtn'
import { SimpleBtn } from './simpleBtn/simpleBtn'

import { ItemProps } from './types'

export const TodoItem: React.FC<ItemProps> = memo(function TodoItem({ content, itemId, countBeforeDone = 1, className }) {
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
    <li className={cn(styles.itemWrapper, className)}>
      <div className={styles.padded}>
        {content}
      </div>
      {countBeforeDone > 1 ?
        <CountingBtn itemId={itemId} countBeforeDone={countBeforeDone} className={styles.padded} /> :
        <SimpleBtn itemId={itemId} className={styles.padded} />
      }
      <div className={styles.padded}>
        <button onClick={copyTask}>copy task</button>
      </div>
      <div className={styles.padded}>
        <button onClick={deleteTask}>delete</button>
      </div>
    </li>
  )
})
