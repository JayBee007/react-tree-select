import React, { useMemo } from 'react'

import { useTreeContext } from '@providers'

export function Search () {
  const tree = useTreeContext()

  const handlers = useMemo(() => {
    return {
      updateSearch: (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        const value = e.target.value
        tree.service.updateSearch(value)
      }
    }
  }, [tree])
  return (
        <div className="search">
            <input className="search-input" type="text" placeholder='Search' onChange={handlers.updateSearch}/>
        </div>
  )
}
