import React from 'react'

const CommentSkeleton = () => {
  return (
    <div className="flex gap-4 p-4 bg-background-50 rounded-xl">
      <div className="flex-shrink-0 h-10 w-10 bg-background-100 rounded-full overflow-hidden"></div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="w-20 h-3 bg-background-100 rounded-full"></div>
          <div className="w-12 h-3 bg-background-100 rounded-full"></div>
          <div className="w-14 h-3 bg-background-100 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-3/4 h-2 bg-background-100 rounded-full"></div>
          <div className="w-1/2 h-2 bg-background-100 rounded-full"></div>
        </div>
      </div>
      <div className="h-5 w-5 bg-background-100 rounded-full"></div>
    </div>
  )
}

export default CommentSkeleton
