# React Tree Select

A hierarchical select component using react

## Usage

Tree provider component accepts the following props

```
export interface TreeProps<T> {
  children: ReactElement;
  data: T;
  height?: number;
  width?: number;
  rowHeight?: number;
  indent?: number;
  getChildren?: string | ((d: T) => T[]);
  className?: string | undefined;
}
```
The data props should be of the type, having unique ids

```
export type Data = {
  id: string;
  name: string;
  children?: Data[]
}
```

```
import { Tree } from '@components'

<Tree
    data={data}
    height={500}
    indent={24}
    width={250}
    onClick={(e) => console.log('e', e)}>
      {children}
</Tree>
```

Since the tree component is a provider, the child components have access to underlying state, actions etc via context `useTreeContext`

At the moment, three components `List, Search and Tags` are exported which can be used as direct children.



TODO
-   Testing
-   Separate state, other data models from context
-   Check for extra re-renders
-   Proper way to extend styling
