import { Metadata } from 'next'
import SignIn from '@/components/pages/signin/SignIn'

export const metadata: Metadata = {
  title: 'SignIn',
}

interface PageProps {
  searchParams: {
    callbackUrl?: string
  }
}

export default function SignInPage({ searchParams }: PageProps) {
  return <SignIn callbackUrl={searchParams.callbackUrl} />
}
