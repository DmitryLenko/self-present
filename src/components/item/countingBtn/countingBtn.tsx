import React, { useCallback, useState, memo } from 'react'

import { ItemProps } from '../types'
import { ItemAction } from '../itemAction/itemAction'

export const CountingBtn: React.FC<Pick<ItemProps, 'itemId' | 'countBeforeDone'>> = memo(function CountingBtn({ countBeforeDone, itemId }) {

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
    <div>
      <ItemAction onClick={handleCloseWithCounting}/>
      <span>{`done ${times} times`}</span>
    </div>
  )
})
