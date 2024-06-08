import React from 'react'
import SuggestedFollows from './suggestedFollows/SuggestedFollows'

const RightSidebar = () => {
  return (
    <aside className="sticky top-24 w-80 h-full flex flex-col gap-4">
      <SuggestedFollows />
    </aside>
  )
}

export default RightSidebar
