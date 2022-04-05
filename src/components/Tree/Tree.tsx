import React, { useRef, useMemo } from 'react'

import { TreeSelectProvider } from '@providers'
import { IdObj, TreeProps, TreeNode } from '@types'
import { decorateTree } from '@helpers'

export function Tree<T extends IdObj> (props: TreeProps<T>) {
  const root = useMemo<TreeNode<T>>(
    () =>
      decorateTree<T>(
        props.data
      ),
    [
      props.data
    ]
  )

  return (
        <TreeSelectProvider
            listEl={useRef<HTMLDivElement | null>(null)}
            width={props.width === undefined ? 300 : props.width}
            height={props.height === undefined ? 500 : props.height}
            indent={props.indent === undefined ? 24 : props.indent}
            rowHeight={props.rowHeight === undefined ? 24 : props.rowHeight}
            // @ts-ignore
            root={root}
        >
            {props.children}
        </TreeSelectProvider>
  )
}
