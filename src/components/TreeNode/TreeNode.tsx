// @ts-nocheck
import React from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'

import { TreeNodeRendererProps, Data } from '@types'

const color = '#999'
function ToggleButton (props:any) {
  const { isOpen, isSelected, toggle, isParent } = props

  if (isParent) {
    const Icon = isOpen ? ChevronDown : ChevronRight
    return (
    <button tabIndex={-1} onClick={toggle}>
        <Icon size={12} stroke={isSelected ? 'white' : color} />
    </button>
    )
  } else {
    return <div />
  }
}

export function TreeNode (props:TreeNodeRendererProps<Data>) {
  const { state, data, innerRef, styles, handlers } = props
  const hasChildren = !!data.children
  // eslint-disable-next-line no-unused-vars
  const open = state.isOpen
  //   const name = data.name

  return (
    <div
        ref={innerRef}
        style={styles.row}
        className=""
        onClick={(e) => handlers.select(e)}
    >
        <div className="node-row" style={styles.indent}>
            <ToggleButton
                toggle={handlers.toggleParent}
                isOpen={open}
                isParent={hasChildren}
                isSelected={state.isSelected}
            />
        </div>
    </div>
  )
}
