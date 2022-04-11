import { TreeNode } from '../types'

export function flattenTree<T> (root: TreeNode<T>): TreeNode<T>[] {
  const list: TreeNode<T>[] = []

  function collect (node: TreeNode<T>) {
    if (node.level >= 0) {
      list.push(node)
    }
    if (node.isOpen) {
      node.children?.forEach(collect)
    }
  }

  collect(root)
  return list
}
