import memoizeOne from 'memoize-one'
import { Dispatch } from 'react'
import { FixedSizeList } from 'react-window'

import { flattenTree } from '@helpers'
import { StateContext, TreeSelectProviderProps, TreeNode } from '@types'
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

  get visibleIds () {
    return getIds(this.visibleNodes)
  }

  // get idToIndex () {
  //   return createIndex(this.visibleNodes)
  // }

  get visibleNodes () {
    return createList(this.props.root)
  }
}

const getIds = memoizeOne((nodes: TreeNode[]) => nodes.map((n) => n.id))
// const createIndex = memoizeOne((nodes: Node[]) => {
//   return nodes.reduce<{ [id: string]: number }>((map, node, index) => {
//     map[node.id] = index
//     return map
//   }, {})
// })
const createList = memoizeOne(flattenTree)

// function dfs (node: TreeNode<unknown>, id: string): TreeNode<unknown> | null {
//   if (!node) return null
//   if (node.id === id) return node
//   if (node.children) {
//     for (const child of node.children) {
//       const result = dfs(child, id)
//       if (result) return result
//     }
//   }
//   return null
// }
