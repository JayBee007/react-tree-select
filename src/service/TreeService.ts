import { Dispatch } from 'react'
import { FixedSizeList } from 'react-window'

import { StateContext, TreeSelectProviderProps } from '@types'
import { Action } from '@reducer'
import { actions } from '@reducer/actions'

export class TreeService<T = unknown> {
  constructor (
        public dispatch: Dispatch<Action>,
        public state: StateContext,
        public props: TreeSelectProviderProps<T>,
        public list: FixedSizeList | undefined
  ) {
    this.dispatch = dispatch
    this.state = state
    this.props = props
    this.list = list
  }

  toggleSelection (id:string) {
    this.dispatch(actions.toggleNodeSelection(id))
  }
}
