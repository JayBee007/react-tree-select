import React, { useRef, useMemo } from 'react'

import { TreeSelectProvider } from '@providers'
import { IdObj, TreeProps, TreeNode } from '@types'
import { decorateTree } from '@helpers'

export function Tree<T extends IdObj> (props: TreeProps<T>) {
  const { width = 300, height = 500, indent = 24, rowHeight = 24 } = props
  const root = useMemo<TreeNode<T>>(() => decorateTree<T>(props.data),
    [props.data])

  return (
        <TreeSelectProvider
            listEl={useRef<HTMLDivElement | null>(null)}
            width={width}
            height={height}
            indent={indent}
            rowHeight={rowHeight}
            root={root}
        >
            {props.children}
        </TreeSelectProvider>
  )
}
