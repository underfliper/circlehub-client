'use client'
import React, { FC } from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { CircleAlert } from 'lucide-react'
import Link from 'next/link'
import Form from '@/components/form/Form'
import Field from '@/components/field/Field'

interface SignInProps {
  callbackUrl?: string
}

const FormSchema = z.object({
  email: z.string().email('Email must be a valid email address.'),
  password: z.string().min(1, 'Password must be completed.'),
})

type InputType = z.infer<typeof FormSchema>

const SignIn: FC<SignInProps> = ({ callbackUrl }) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({ resolver: zodResolver(FormSchema) })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const result = await signIn('credentials', { redirect: false, ...data })

    if (!result?.ok) {
      setError('root', {
        message: result?.error!,
        type: result?.status.toString(),
      })
      return
    }

    router.push(callbackUrl ? callbackUrl : '/')
  }

  const SignInFormFooter = () => (
    <div className="flex gap-4">
      <div className="flex flex-col text-sm">
        <span>
          Don't have an account yet?{' '}
          <Link href="/signup" className="text-primary-600 hover:underline">
            Sign Up.
          </Link>
        </span>
        <Link href="#" className="text-primary-600 hover:underline">
          Forgot password?
        </Link>
      </div>
      <button className="py-2 px-8 rounded-lg bg-primary-600 text-txt-50 font-medium text-md">
        Sign In
      </button>
    </div>
  )

  return (
    <Form
      title="Sign In"
      footerContent={<SignInFormFooter />}
      onSubmit={handleSubmit(onSubmit)}>
      <Field
        id="email"
        label="Email"
        type="text"
        placeholder="example@gmail.com"
        error={errors?.email?.message}
        {...register('email')}
      />
      <Field
        id="password"
        label="Password"
        type="password"
        placeholder="********"
        error={errors?.password?.message}
        {...register('password')}
      />
      {errors.root && (
        <div className="flex gap-2 items-center text-sm text-red-500">
          <CircleAlert size={18} />
          <span>{errors.root.message}</span>
        </div>
      )}
    </Form>
  )
}

export default SignIn
