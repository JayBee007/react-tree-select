import memoizeOne from 'memoize-one'
import { Dispatch } from 'react'
import { FixedSizeList } from 'react-window'

import { flattenTree } from '@helpers'
import { StateContext, TreeSelectProviderProps } from '@types'
import { Action } from '@reducer'
import { actions } from '@reducer/actions'

export class TreeService<T = unknown> {
  constructor (
        public dispatch: Dispatch<Action>,
        public state: StateContext<unknown>,
        public props: TreeSelectProviderProps<T>,
        public list: FixedSizeList | undefined
  ) {
    this.dispatch = dispatch
    this.state = state
    this.props = props
    this.list = list
  }

  updateSearch (search:string) {
    this.dispatch(actions.updateSearch(search))
  }

  toggleSelection (id:string, isSelected: boolean) {
    this.dispatch(actions.toggleNodeSelection(id, isSelected))
  }

  toggleNodeVisiblity (id: string, isOpen: boolean) {
    this.dispatch(actions.toggleNodeVisiblity(id, isOpen))
  }

  get visibleNodes () {
    const list = createList(this.state.root)

    if (this.state.searchString) {
      // @ts-ignore
      return list.filter(elm => elm.model.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) > -1)
    }
    return list
  }
}

const createList = memoizeOne(flattenTree)
