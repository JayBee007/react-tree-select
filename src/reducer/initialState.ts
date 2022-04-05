import { StateContext, TreeNode } from '@types'

export const initialState = (root: TreeNode<unknown>): StateContext<unknown> => ({
  selectedNodes: new Set(),
  searchString: '',
  root
})
