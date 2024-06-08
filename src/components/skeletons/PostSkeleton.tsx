import React from 'react'

const PostSkeleton = () => {
  return (
    <div className="p-4 w-full bg-background-50 rounded-xl">
      <div className="flex flex-col gap-4 animate-pulse">
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-background-100 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="w-28 h-3 bg-background-100 rounded-full"></div>
            <div className="w-24 h-3 bg-background-100 rounded-full"></div>
          </div>
        </div>
        <div className="w-full h-64 bg-background-100 rounded-lg"></div>
        <div className="flex gap-4">
          <div className="w-8 h-5 bg-background-100 rounded-md"></div>
          <div className="w-8 h-5 bg-background-100 rounded-md"></div>
          <div className="w-8 h-5 bg-background-100 rounded-md"></div>
        </div>
      </div>
    </div>
  )
}

export default PostSkeleton
