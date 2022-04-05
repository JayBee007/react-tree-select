import { StateContext } from '@types'

import { findAndToggleNodes, toggleNodeSelection } from './helper'
import { actions } from './actions'
import { TOGGLE_NODE_SELECTION, TOGGLE_NODE_VISIBLITY } from './constants'

type ActionObj = {
  [Prop in keyof typeof actions]: ReturnType<typeof actions[Prop]>;
};

export type Action = ActionObj[keyof ActionObj];

export function reducer (state: StateContext<unknown>, action: Action): StateContext<unknown> {
  switch (action.type) {
    case TOGGLE_NODE_SELECTION:
      // @ts-ignore
      return toggleNodeSelection(state, action.id, action.isSelected)
    case TOGGLE_NODE_VISIBLITY:
      // @ts-ignore
      return findAndToggleNodes(state, action.id, action.isOpen)
    default:
      return state
  }
}
