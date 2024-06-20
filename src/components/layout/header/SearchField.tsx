import React from 'react'
import { Search } from 'lucide-react'

const SearchField = () => {
  return (
    <div className="flex gap-2 items-center p-2 w-max bg-background-100 text-txt-400 rounded-lg focus-within:outline focus-within:outline-2 focus-within:outline-primary-600">
      <Search size={20} />
      <input
        type="text"
        placeholder="Search..."
        className="w-80 bg-transparent outline-none"
      />
    </div>
  )
}

export default SearchField
