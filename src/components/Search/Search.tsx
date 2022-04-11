import React, { useCallback } from 'react'

import { useTreeContext } from '@providers'
import { debounce } from '@utils'

export function Search () {
  const tree = useTreeContext()

  const updateSearch = debounce(useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    const value = e.target.value
    tree.service.updateSearch(value)
  }, [tree]), 250)

  return (
        <div className="search">
            <input className="search-input" type="text" placeholder='Search' onChange={updateSearch}/>
        </div>
  )
}
