import React, { forwardRef } from 'react'
import { FixedSizeList } from 'react-window'

import { Row } from '@components'
import { useTreeContext } from '@providers'

const OuterElement = forwardRef(function Outer (
  props: React.HTMLProps<HTMLDivElement>,
  ref
) {
  const { children, ...rest } = props
  const tree = useTreeContext()
  return (
      // @ts-ignore
      <div ref={ref} {...rest} onClick={tree.onClick} onContextMenu={tree.onContextMenu}>
        <div
          style={{
            height: tree.service.visibleNodes.length * tree.rowHeight,
            width: '100%',
            overflow: 'hidden',
            position: 'absolute',
            left: '0',
            right: '0'
          }}
        >
        </div>
        {children}
      </div>
  )
})

export function List () {
  const tree = useTreeContext()
  return (
    <div style={{ height: tree.height, width: tree.width, overflow: 'hidden' }}>
    <FixedSizeList
      className={'className'}
      outerRef={tree.listEl}
      itemCount={tree.service.visibleNodes.length}
      height={tree.height}
      width={tree.width}
      itemSize={tree.rowHeight}
      itemKey={(index) => tree.service.visibleNodes[index]?.id || index}
      outerElementType={OuterElement}
      // @ts-ignore
      ref={tree.list}
    >
        {Row}
    </FixedSizeList>
  </div>
  )
}
