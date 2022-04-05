import React, { CSSProperties, useMemo, useRef } from 'react'

import { useTreeContext } from '@providers'
import { TreeNode } from '../TreeNode'

type RowProps = {
    style: CSSProperties;
    index: number;
};

export const Row = React.memo(function Row (props:RowProps) {
  const { index, style } = props
  const tree = useTreeContext()
  const node = tree.service.visibleNodes[index]
  const isOpen = node.isOpen
  const isSelected = node.isSelected
  const indent = tree.indent * node.level
  const el = useRef<HTMLDivElement | null>(null)

  const state = useMemo(() => {
    return {
      isOpen,
      isSelected
    }
  }, [isOpen, isSelected])

  const styles = useMemo(
    () => ({
      row: { ...style },
      indent: { paddingLeft: indent }
    }),
    [indent, style]
  )

  const handlers = useMemo(() => {
    return {
      toggleNodeSelection: (e:React.MouseEvent) => {
        e.stopPropagation()
        tree.service.toggleSelection(node.id, !node.isSelected)
      },
      toggleNode: (e: React.MouseEvent) => {
        e.stopPropagation()
        tree.service.toggleNodeVisiblity(node.id, !node.isOpen)
      }
    }
  }, [tree])

  return (
      <TreeNode
        data={node.model}
        // @ts-ignore
        innerRef={el}
        styles={styles}
        state={state}
        handlers={handlers}
        tree={tree.service}
      />
  )
})
