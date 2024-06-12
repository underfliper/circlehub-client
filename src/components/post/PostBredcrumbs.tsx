'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const PostBredcrumbs = () => {
  const router = useRouter()

  return (
    <div
      className="sticky top-24 z-10 
    before:content-start before:absolute before:-inset-4 before:bg-background-100 before:-z-10
    after:content-start after:absolute after:-bottom-12 after:w-full after:h-8 after:bg-transparent after:rounded-t-xl after:shadow-[0_-10px_0_0_#F1F1F1]">
      <div className="flex items-center gap-4 p-4 bg-background-50 rounded-xl">
        <button
          className="cursor-pointer hover:text-primary-600"
          onClick={() => router.back()}>
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-semibold text-xl">Post</h2>
      </div>
    </div>
  )
}

export default PostBredcrumbs
