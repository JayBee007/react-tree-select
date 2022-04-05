import React, { useMemo } from 'react'

import { useTreeContext } from '@providers'

import { Tag } from './Tag'

export function Tags () {
  const tree = useTreeContext()
  const selectedNodes = tree.service.state.selectedNodes

  const state = useMemo(() => {
    return {
      selectedNodes

    }
  }, [selectedNodes])

  const handlers = useMemo(() => {
    return {
      toggleNodeSelection: (id:string, isSelected:boolean) => {
        tree.service.toggleSelection(id, isSelected)
      }
    }
  }, [tree])
  return (
      <div className='tags' style={{ width: tree.width }}>
          {Array.from(state.selectedNodes).map((node:any) => (
              <Tag key={node.id} node={node} onClose={handlers.toggleNodeSelection}/>
          ))}
      </div>
  )
}
