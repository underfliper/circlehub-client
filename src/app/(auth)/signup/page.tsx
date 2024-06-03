import SignUp from '@/components/pages/signup/SignUp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function SignInPage() {
  return <SignUp />
}
