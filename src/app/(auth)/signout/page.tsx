import { Metadata } from 'next'
import SignOut from '@/components/pages/signout/SignOut'

export const metadata: Metadata = {
  title: 'SignOut',
}

export default function SignInPage() {
  return <SignOut />
}
