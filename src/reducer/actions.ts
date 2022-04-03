import { TOGGLE_NODE_SELECTION } from './constants'

const toggleNodeSelection = (id:string) => ({
  type: TOGGLE_NODE_SELECTION,
  id
})

export const actions = {
  toggleNodeSelection
}
