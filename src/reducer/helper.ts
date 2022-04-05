import { StateContext, TreeNode } from '@types'

function dfs (node: TreeNode<unknown>, id: string): TreeNode<unknown> | null {
  if (!node) return null
  if (node.id === id) return node
  if (node.children) {
    for (const child of node.children) {
      const result = dfs(child, id)
      if (result) return result
    }
  }
  return null
}

export function findAndToggleNodes (state: StateContext<unknown>, id: string, isOpen: boolean): StateContext<unknown> {
  const root = state.root

  const node = dfs(root, id)

  if (node) {
    node.isOpen = isOpen
    return ({
      ...state,
      root: { ...root }
    })
  }

  return state
}

function selectNodes (node:TreeNode, select:boolean, selectedNodes: Set<unknown>) {
  node.isSelected = select

  if (node.isSelected) {
    selectedNodes.add(node)
  }

  if (!node.isSelected) {
    // @ts-ignore
    const temp = [...selectedNodes].find(obj => obj.id === node.id)
    selectedNodes.delete(temp)
  }

  if (node.children) {
    for (const child of node.children) {
      selectNodes(child, select, selectedNodes)
    }
  }

  return selectedNodes
}

export function toggleNodeSelection (state: StateContext<unknown>, id: string, isSelected: boolean): StateContext<unknown> {
  const root = state.root
  const selectedNodes = state.selectedNodes
  const node = dfs(root, id)

  if (node) {
    const updatedSelectedNodes = selectNodes(node, isSelected, selectedNodes)
    return ({
      ...state,
      selectedNodes: updatedSelectedNodes,
      root: { ...root }
    })
  }

  return state
}
