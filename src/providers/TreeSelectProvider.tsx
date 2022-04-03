
import { FixedSizeList } from 'react-window'
import React, { useReducer, useRef, useMemo } from 'react'

import { TreeContext } from '@providers'
import { useTreeService } from '@service'
import { reducer } from '@reducer'
import { initialState } from '@reducer/initialState'
import { TreeSelectProviderProps, TreeContextType } from '@types'

export function TreeSelectProvider<T> (props: TreeSelectProviderProps<T>) {
  const [state, dispatch] = useReducer(reducer, initialState())

  const list = useRef<FixedSizeList>()
  const service = useTreeService<T>(state, dispatch, props, list.current)

  const value = useMemo<TreeContextType<T>>(
    () => ({ ...props, service, list }),
    [props, service, list]
  )
  return (
    // @ts-ignore
    <TreeContext.Provider value={value}>
        {props.children}
    </TreeContext.Provider>
  )
}
