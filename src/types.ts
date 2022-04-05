import { MouseEventHandler, ReactElement, MutableRefObject, Ref, CSSProperties } from 'react'
import { FixedSizeList } from 'react-window'

import { TreeService } from '@service'

export type Data = {
  id: string;
  name: string;
  children?: Data[]
}

export interface IdObj {
    id: string;
}
export interface TreeProps<T> {
  children: ReactElement;
  data: T;
  height?: number;
  width?: number;
  rowHeight?: number;
  indent?: number;
  getChildren?: string | ((d: T) => T[]);
  className?: string | undefined;
  handle?: Ref<TreeService<T>>;
  onClick?: MouseEventHandler;
}
export type TreeNode<T = unknown> = {
    id: string;
    model: T;
    level: number;
    children: TreeNode<T>[] | null;
    parent: TreeNode<T> | null;
    isOpen: boolean;
    isSelected: boolean;
};

export type TreeNodeState = {
  isOpen: boolean;
  isSelected: boolean;
};

export type TreeSelectProviderProps<T> = {
    children: ReactElement;
    height: number;
    width: number;
    indent: number;
    onClick?: MouseEventHandler;
    rowHeight: number;
    listEl: MutableRefObject<HTMLDivElement | null>;
    root: TreeNode<T>
}

export type TreeContextType<T> = TreeSelectProviderProps<T> & {
    service: TreeService<T>;
    list: MutableRefObject<FixedSizeList | undefined>;
};

export type StateContext<T> = {
    selectedNodes: Set<T>;
    searchString: string;
    root: TreeNode<T>;
};

export type NodeHandlers = {
  toggleNodeSelection: MouseEventHandler;
  toggleNode: MouseEventHandler;
};

export type TreeNodeRendererProps<T> = {
  innerRef: (el: HTMLDivElement | null) => void;
  styles: { row: CSSProperties; indent: CSSProperties };
  data: T;
  state: TreeNodeState;
  handlers: NodeHandlers;
  tree: TreeService<T>;
};
