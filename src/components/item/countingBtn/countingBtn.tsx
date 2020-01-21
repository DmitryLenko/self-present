import React, { useCallback, useState, memo } from 'react'
import cn from 'classnames'

import { ItemProps } from '../types'
import { ItemAction } from '../itemAction/itemAction'

import styles from './styles.scss'

export const CountingBtn: React.FC<Pick<ItemProps, 'itemId' | 'countBeforeDone' | 'className'>> = memo(
  function CountingBtn({ countBeforeDone, itemId, className }) {

    const [times, setTimes] = useState(0)

    const handleCloseWithCounting = useCallback(
      () => {
        if(times < countBeforeDone) {
          return setTimes(times + 1)
        }
        console.log('delete item', itemId)
      },
      [itemId, times, countBeforeDone],
    )
    return (
      <div className={cn(className, styles.btnWrapper)}>
        <div className={cn(times > 0 ? styles.padded : '')}>
          <ItemAction onClick={handleCloseWithCounting}/>
        </div>
        { times > 0 && <span>{`done ${times} times`}</span> }
      </div>
    )
  }
)
