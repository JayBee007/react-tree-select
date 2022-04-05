import { TOGGLE_NODE_SELECTION, TOGGLE_NODE_VISIBLITY } from './constants'

const toggleNodeSelection = (id:string, isSelected:boolean) => ({
  type: TOGGLE_NODE_SELECTION,
  id,
  isSelected
})

export const toggleNodeVisiblity = (id: string, isOpen: boolean) => ({
  type: TOGGLE_NODE_VISIBLITY,
  id,
  isOpen
})

export const actions = {
  toggleNodeSelection,
  toggleNodeVisiblity
}
