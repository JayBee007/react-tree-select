import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { List, Tags, Search } from 'src/components'

import { Tree as TreeComponent } from './Tree'
import { makeTree } from 'src/data/makeTree'

import 'src/index.scss'

export default {
  title: 'Tree',
  component: TreeComponent
} as ComponentMeta<typeof TreeComponent>

export const Tree: ComponentStory<typeof TreeComponent> = () => (
  <TreeComponent
    data={makeTree()}
    height={500}
    indent={24}
    width={250}
    onClick={(e) => console.log('e', e)}>
      <React.Fragment>
        <Search />
        <List />
        <Tags />
      </React.Fragment>
  </TreeComponent>
)
