import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { List } from 'src/components'

import { Tree as TreeComponent } from './Tree'
import { makeTree } from 'src/data/makeTree'

export default {
  title: 'Tree',
  component: TreeComponent
} as ComponentMeta<typeof TreeComponent>

// @ts-ignore
export const Tree: ComponentStory<typeof TreeComponent> = () => (
  <TreeComponent
    data={makeTree()}
    height={500}
    indent={24}
    width={200}
    onClick={(e) => console.log('e', e)}>
      <List />
  </TreeComponent>
)
