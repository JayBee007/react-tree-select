import { createContext, useContext } from 'react'

import { TreeContextType, IdObj } from '@types'

export const TreeContext = createContext<TreeContextType<IdObj> | null>(null)

export function useTreeContext () {
  const value = useContext(TreeContext)
  if (!value) throw new Error('Tree Context must be in a provider')
  return value
}
