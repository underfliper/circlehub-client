'use client'
import { FC } from 'react'
import { Copy } from 'lucide-react'

interface UsernameProps {
  username: string
}

const Username: FC<UsernameProps> = ({ username }) => {
  const copy = () => {
    navigator.clipboard.writeText(`@${username}`)
  }

  return (
    <button
      className="flex gap-1 items-center text-primary-600 text-xs font-medium w-max"
      onClick={copy}>
      <span>{`@${username}`}</span>
      <Copy size={12} />
    </button>
  )
}

export default Username
