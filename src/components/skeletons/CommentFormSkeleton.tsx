import React from 'react'

const CommentFormSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-background-50 rounded-xl">
      <div className="h-4 w-32 bg-background-100 rounded-full"></div>
      <span className="w-full h-[2px] block bg-background-100"></span>
      <div className="flex gap-4">
        <div className="flex-shrink-0 h-10 w-10 bg-background-100 rounded-full overflow-hidden"></div>
        <div className="w-full h-16 p-3 bg-background-100 rounded-xl"></div>
        <div className="h-8 w-36 bg-background-100 rounded-xl"></div>
      </div>
    </div>
  )
}

export default CommentFormSkeleton
