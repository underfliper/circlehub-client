'use client'
import React from 'react'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { authService } from '@/services/auth/auth.service'
import Form from '@/components/form/Form'
import Field from '@/components/field/Field'
import { signIn } from 'next-auth/react'
import { Credentials } from '@/types/auth.types'

const FormSchema = z.object({
  firstName: z
    .string()
    .min(3, 'Firstname must contain at least 3 characters.')
    .regex(
      new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/),
      'Firstname must contain only letters.',
    ),
  lastName: z
    .string()
    .min(3, 'Lastname must contain at least 3 characters.')
    .regex(
      new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/),
      'Lastname must contain only letters.',
    ),
  username: z
    .string()
    .min(6, 'Username must contain from 6 to 18 characters.')
    .max(18)
    .regex(
      new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/),
      'Username must contain only letters.',
    ),
  email: z.string().email('Email must be a valid email address.'),
  password: z.string().min(1, 'Password must be completed.'),
  confirmPassword: z.string().min(1, 'Password must be completed.'),
})

type InputType = z.infer<typeof FormSchema>

const SignUp = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({ resolver: zodResolver(FormSchema) })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { message: 'Password mismatch.' })
      return
    }

    try {
      await authService.SignUp(data)
    } catch (error: any) {
      if (error.target) {
        setError(error.target, { message: error.message })
      }
    }

    const auth: Credentials = { email: data.email, password: data.password }

    await signIn('credentials', { redirect: false, ...auth })

    router.push('/profile')
  }

  const SignUpFormFooter = () => (
    <div className="flex gap-4 justify-between">
      <div className="flex flex-col text-sm">
        <span>
          Already have an account?{' '}
          <Link href="/signin" className="text-primary-600 hover:underline">
            Sign In.
          </Link>
        </span>
      </div>
      <button className="py-2 px-8 rounded-lg bg-primary-600 text-txt-50 font-medium text-md">
        Sign Up
      </button>
    </div>
  )

  return (
    <Form
      title="Sign Up"
      footerContent={<SignUpFormFooter />}
      onSubmit={handleSubmit(onSubmit)}
      className="w-[34rem]">
      <Field
        id="firstname"
        label="Firstname"
        type="text"
        placeholder="John"
        error={errors.firstName?.message}
        {...register('firstName')}
      />
      <Field
        id="lastname"
        label="Lastname"
        type="text"
        placeholder="Doe"
        error={errors.lastName?.message}
        {...register('lastName')}
      />
      <Field
        id="username"
        label="Username"
        type="text"
        placeholder="johndoe"
        error={errors.username?.message}
        {...register('username')}
      />
      <Field
        id="email"
        label="Email"
        type="text"
        placeholder="example@gmail.com"
        error={errors.email?.message}
        {...register('email')}
      />
      <Field
        id="password"
        label="Password"
        type="password"
        placeholder="********"
        {...register('password')}
        error={errors.password?.message}
      />
      <Field
        id="confirmPassword"
        label="Confirm password"
        type="password"
        placeholder="********"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
    </Form>
  )
}

export default SignUp
