import React from 'react'

import { TreeSelectProvider } from '@providers'
import { IdObj, TreeSelectProviderProps } from '@types'

export function Tree<T extends IdObj> (props: TreeSelectProviderProps<T>) {
  const root = {}

  return (
        <TreeSelectProvider
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
