import { StateContext } from '@types'

import { actions } from './actions'
import { TOGGLE_NODE_SELECTION } from './constants'

type ActionObj = {
  [Prop in keyof typeof actions]: ReturnType<typeof actions[Prop]>;
};

export type Action = ActionObj[keyof ActionObj];

export function reducer (state: StateContext, action: Action): StateContext {
  switch (action.type) {
    case TOGGLE_NODE_SELECTION:
      return state
    default:
      return state
  }
}
