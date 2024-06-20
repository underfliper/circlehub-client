'use client'
import React, { FC, useState } from 'react'
import { z } from 'zod'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { CommentsAction, CommentsActionKind } from '../pages/post/PagePost'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { postService } from '@/services/post/post.service'
import { LoaderCircle } from 'lucide-react'
import Modal from '../modal/Modal'

interface AddCommentFormProps {
  postId: number
  dispatch: React.Dispatch<CommentsAction>
}

const FormSchema = z.object({
  text: z.string({ required_error: 'Field mist be completed.' }),
})

type InputType = z.infer<typeof FormSchema>

const AddCommentForm: FC<AddCommentFormProps> = ({ postId, dispatch }) => {
  const { data } = useSession()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({ resolver: zodResolver(FormSchema) })
  const [isModalOpen, setModalOpen] = useState(false)

  if (!data) return

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    try {
      const comment = await postService.AddComment(postId, data.text)

      dispatch({
        type: CommentsActionKind.ADD_COMMENT,
        payload: { comment: comment },
      })
    } catch (error: any) {
      setError('text', { message: error.message })
      setModalOpen(true)
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4 bg-background-50 rounded-xl">
      <h2 className="font-semibold text-xl text-txt-950">Comments</h2>
      <span className="w-full h-[2px] block bg-background-100"></span>
      <form className="flex gap-4" onSubmit={handleSubmit(onSubmit)}>
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
          rows={2}
          {...register('text')}></textarea>
        <button className="flex-1 flex gap-1 items-center justify-center h-max min-w-32 px-3 py-2 font-semibold bg-primary-600 text-txt-50 rounded-lg hover:bg-primary-200 hover:text-primary-600 transition-colors easy-in-out">
          {isSubmitting ? (
            <>
              <LoaderCircle className="animate-spin" size={20} />
              <span>Sending...</span>
            </>
          ) : (
            <span>Send</span>
          )}
        </button>
      </form>
      <Modal
        title="Potential spam"
        className="w-96"
        isOpen={isModalOpen}
        setOpen={setModalOpen}>
        <p>{errors.text?.message}</p>
      </Modal>
    </div>
  )
}

export default AddCommentForm
