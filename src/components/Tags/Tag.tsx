import React from 'react'
import { X } from 'react-feather'

import { TreeNode } from '@types'

interface TagProps {
    node: TreeNode,
    onClose: (id:string, isSelected: boolean) => void
}

export function Tag (props:TagProps) {
  const { node, onClose } = props

  function handleClick (e: React.MouseEvent) {
    e.stopPropagation()
    onClose(node.id, !node.isSelected)
  }

  return (
    // @ts-ignore
    <button className='tag'>{node.model.name} <i className="tag-icon"><X onClick={handleClick} size={16} stroke="currentColor"/></i></button>
  )
}
