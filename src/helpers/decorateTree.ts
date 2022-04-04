import { TreeProps, IdObj, TreeNode } from '../types'

function createNode<T extends IdObj> (
  model: T,
  level: number,
  parent: TreeNode<T> | null,
  children: TreeNode<T>[] | null,
  isOpen: boolean
): TreeNode<T> {
  return {
    id: model.id,
    level,
    parent,
    children,
    isOpen,
    // @ts-ignore
    model,
    rowIndex: null
  }
}

function access (obj: any, accessor: string | boolean | Function) {
  if (typeof accessor === 'boolean') {
    return accessor
  }

  if (typeof accessor === 'string') {
    return obj[accessor]
  }

  return accessor(obj)
}

export function decorateTree<T extends IdObj> (
  model: T,
  getChildren: TreeProps<T>['getChildren'] = 'children',
  openByDefault: boolean = true
): TreeNode<T> {
  function visitSelfAndChildren (
    model: T,
    level: number,
    parent: TreeNode<T> | null
  ) {
    const node = createNode<T>(
      model,
      level,
      parent,
      null,
      true
    )
    const children = access(model, getChildren) as T[]

    if (children) {
      node.children = children.map((child: T) =>
        visitSelfAndChildren(child, level + 1, node)
      )
    }
    return node
  }

  return visitSelfAndChildren(model, 0, null)
}
