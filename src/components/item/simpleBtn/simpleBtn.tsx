import React, { memo, useCallback } from 'react'

import { ItemProps } from '../types'
import { ItemAction } from '../itemAction/itemAction'

export const SimpleBtn: React.FC<Pick<ItemProps, 'itemId' | 'className'>> = memo(function SimpleBtn({ itemId, className }) {
  const handleClose = useCallback(
    () => {
      console.log('delete item', itemId)
    },
    [itemId],
  )
  return (
    <div className={className}>
      <ItemAction onClick={handleClose}  />
    </div>
  )
})
