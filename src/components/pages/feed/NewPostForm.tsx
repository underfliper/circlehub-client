'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ImagePlus, Paperclip } from 'lucide-react'
import Form from '@/components/form/Form'

const NewPostFormFooter = () => {
  return (
    <div className="flex gap-2">
      <button
        className="flex gap-1 p-2 items-center hover:bg-background-100 rounded-md"
        type="button">
        <ImagePlus size={20} className="text-primary-600" />
        <span className="text-sm font-medium">Image/Video</span>
      </button>
      <button
        className="flex gap-1 p-2 items-center hover:bg-background-100 rounded-md"
        type="button">
        <Paperclip size={20} className="text-orange-600" />
        <span className="text-sm font-medium">Attachment</span>
      </button>
      <button
        className="flex gap-1 p-2 items-center hover:bg-background-100 rounded-md"
        type="button">
        <Calendar size={20} className="text-rose-600" />
        <span className="text-sm font-medium">Event</span>
      </button>
    </div>
  )
}

const NewPostForm = () => {
  const { data: session } = useSession()

  if (!session) return null

  const { user } = session

  return (
    <Form title="New Post" footerContent={<NewPostFormFooter />}>
      <div className="flex gap-4">
        <div className="flex-shrink-0 h-10 w-10 bg-background-100 rounded-full overflow-hidden">
          <Link href={`/profile/${user.id}`} className="block">
            <Image src={user.image} width={40} height={40} alt={user.name} />
          </Link>
        </div>
        <textarea
          className="w-full h-max p-2 bg-background-100 rounded-xl resize-none outline-primary-600 focus:outline focus:outline-2 focus:outline-primary-600"
          placeholder="What`s on your mind?"></textarea>
        <button
          type="submit"
          className="flex-shrink-0 px-3 py-2 h-max bg-primary-600 text-txt-50 font-semibold rounded-lg hover:bg-accent-200 hover:text-primary-600 transition-colors easy-in-out">
          Share Post
        </button>
      </div>
    </Form>
  )
}

export default NewPostForm
