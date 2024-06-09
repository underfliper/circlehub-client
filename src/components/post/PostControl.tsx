'use client'
import React, { ButtonHTMLAttributes, FC } from 'react'
import cn from 'classnames'

interface PostControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
}

const PostControl: FC<PostControlProps> = ({
  className,
  isActive,
  onClick,
  ...props
}) => {
  const baseStyles =
    'flex gap-1 p-1 items-center text-sm font-semibold rounded-lg transition-colors easy-in-out'

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    onClick && onClick(event)
  }

  return (
    <button
      className={cn(baseStyles, className)}
      onClick={handleClick}
      {...props}></button>
  )
}

export default PostControl
