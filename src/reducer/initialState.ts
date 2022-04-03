import { StateContext } from '@types'

export const initialState = (): StateContext => ({
  visibleIds: [],
  selectedIds: [],
  searchString: ''
})
