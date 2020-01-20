import React, { memo, useCallback } from 'react'

import { ItemProps } from '../types'
import { ItemAction } from '../itemAction/itemAction'

export const SimpleBtn: React.FC<Pick<ItemProps, 'itemId'>> = memo(function SimpleBtn({ itemId }) {
  const handleClose = useCallback(
    () => {
      console.log('delete item', itemId)
    },
    [itemId],
  )
  return (
    <ItemAction onClick={handleClose}/>
  )
})
