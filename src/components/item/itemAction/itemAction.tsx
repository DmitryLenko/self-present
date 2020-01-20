import React, { memo } from 'react'

import { ItemActionProps } from './types'

export const ItemAction: React.FC<ItemActionProps> = memo(function ItemAction({ onClick }) {
  return (
    <button name="isDone" onClick={onClick}>
      done
    </button>
  )
})
