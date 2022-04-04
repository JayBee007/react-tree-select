// @ts-nocheck
import React, { CSSProperties, useMemo, useRef } from 'react'

import { useTreeContext } from '@providers'
import { TreeNode } from '../TreeNode'

type RowProps = {
    style: CSSProperties;
    index: number;
};

// export function Row (props: RowProps) {
//   const { index, style } = props
//   const tree = useTreeContext()
//   const node = tree.service.visibleNodes[index]
//   const next = tree.service.visibleNodes[index + 1] || null
//   const prev = tree.service.visibleNodes[index - 1] || null
//   const isOpen = node.isOpen
//   const indent = tree.indent * node.level
//   const el = useRef<HTMLDivElement | null>(null)

//   const state = useMemo(() => {
//     return {
//       isOpen
//     }
//   }, [isOpen])

//   const styles = useMemo(
//     () => ({
//       row: { ...style },
//       indent: { paddingLeft: indent }
//     }),
//     [indent, style]
//   )

//   const handlers = useMemo(() => {
//     return {

//       toggle: (e: React.MouseEvent) => {
//         e.stopPropagation()
//         // tree.onClick(node.id, !node.isOpen);
//       }
//     }
//   }, [tree])

//   return (
//       <TreeNode
//         innerRef={el}
//         styles={styles}
//         state={state}
//         handlers={handlers}
//         tree={tree.service}
//       />
//   )
// }

export const Row = React.memo(function Row (props:RowProps) {
  const { index, style } = props
  const tree = useTreeContext()
  const node = tree.service.visibleNodes[index]
  //   const next = tree.service.visibleNodes[index + 1] || null
  //   const prev = tree.service.visibleNodes[index - 1] || null
  const isOpen = node.isOpen
  const indent = tree.indent * node.level
  const el = useRef<HTMLDivElement | null>(null)

  const state = useMemo(() => {
    return {
      isOpen
    }
  }, [isOpen])

  const styles = useMemo(
    () => ({
      row: { ...style },
      indent: { paddingLeft: indent }
    }),
    [indent, style]
  )

  const handlers = useMemo(() => {
    return {
      toggleParent: (e: React.MouseEvent) => {
        e.stopPropagation()
        // tree.service.toggleParent(node.id, !node.isOpen)
      }
    }
  }, [tree])

  return (
      <TreeNode
        data={node.model}
        innerRef={el}
        styles={styles}
        state={state}
        handlers={handlers}
        tree={tree.service}
      />
  )
})
