'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const AddCommentForm: FC = () => {
  const { data } = useSession()

  if (!data) return

  return (
    <div className="flex flex-col gap-4 p-4 bg-background-50 rounded-xl">
      <h2 className="font-semibold text-xl text-txt-950">Comments</h2>
      <span className="w-full h-[2px] block bg-background-100"></span>
      <form className="flex gap-4">
        <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
          <Link href={`/profile/${data?.user.id}`} className="block">
            <Image
              src={data?.user.image!}
              width={40}
              height={40}
              alt={data?.user.name!}
            />
          </Link>
        </div>
        <textarea
          className="w-full p-2 bg-background-100 rounded-xl resize-none outline-primary-600"
          placeholder="Post your comment"
          rows={2}></textarea>
        <button className="flex-1 h-max px-6 py-2 font-semibold bg-primary-600 text-txt-50 rounded-lg hover:bg-primary-200 hover:text-primary-600 transition-colors easy-in-out">
          Send
        </button>
      </form>
    </div>
  )
}

export default AddCommentForm
