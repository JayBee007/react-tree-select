import { Dispatch, useMemo } from 'react'
import { FixedSizeList } from 'react-window'

import { Action } from '@reducer'
import { StateContext, TreeSelectProviderProps } from '@types'

import { TreeService } from './TreeService'

export function useTreeService<T> (
  state: StateContext,
  dispatch: Dispatch<Action>,
  props: TreeSelectProviderProps<T>,
  list: FixedSizeList | undefined
) {
  const service = useMemo(() => new TreeService<T>(dispatch, state, props, list), [])
  return service
}
