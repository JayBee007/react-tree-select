import React from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'

import { TreeNodeRendererProps } from '@types'

const color = '#999'

function ToggleButton (props:any) {
  const { isOpen, toggle, isParent } = props

  if (isParent) {
    const Icon = isOpen ? ChevronDown : ChevronRight
    return (
    <button tabIndex={-1} onClick={toggle}>
        <Icon size={12} stroke={color} />
    </button>
    )
  } else {
    return <div className='spacer'/>
  }
}

export function TreeNode (props:TreeNodeRendererProps<unknown>) {
  const { state, data, innerRef, styles, handlers } = props
  // @ts-ignore
  const hasChildren = !!data.children
  const open = state.isOpen
  const selected = state.isSelected
  // @ts-ignore
  const name = data.name
  return (
    <div
        ref={innerRef}
        style={styles.row}
        className="row"
    >
        <div className="row-contents" style={styles.indent}>
            <ToggleButton
                toggle={handlers.toggleNode}
                isOpen={open}
                isParent={hasChildren}
                isSelected={state.isSelected}
            />
            <div>
              {/* @ts-ignore */}
              <input type="checkbox" checked={selected} value={data.id} onChange={handlers.toggleNodeSelection} />
            </div>
            <span>{name}</span>
        </div>
    </div>
  )
}
