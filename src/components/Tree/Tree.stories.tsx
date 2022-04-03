import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Tree as TreeComponent } from './Tree'

export default {
  title: 'Tree',
  component: TreeComponent
} as ComponentMeta<typeof TreeComponent>

function FutureNode () {
  return (<p>Future Node</p>)
}
// @ts-ignore
export const Tree: ComponentStory<typeof TreeComponent> = () => <TreeComponent height={300} indent={24}><FutureNode /></TreeComponent>
