import { MouseEventHandler, ReactElement, MutableRefObject } from 'react'
import { FixedSizeList } from 'react-window'

import { TreeService } from '@service'

export interface IdObj {
    id: string;
  }

export type TreeNode<T = unknown> = {
    id: string;
    nodeData: T;
    level: number;
    children: TreeNode<T>[] | null;
    parent: TreeNode<T> | null;
    isOpen: boolean;
    isSelected: boolean;
    rowIndex: number | null;
  };

export type TreeSelectProviderProps<T> = {
    children: ReactElement;
    height: number;
    width: number;
    indent: number;
    onClick?: MouseEventHandler;
    rowHeight: number;
    root: TreeNode<T>
}

export type TreeContextType<T> = TreeSelectProviderProps<T> & {
    service: TreeService<T>;
    list: MutableRefObject<FixedSizeList | undefined>;
};

export type StateContext = {
    visibleIds: string[];
    selectedIds: string[];
    searchString: string;
  };
