'use client'
import cn from 'classnames'
import React, { ButtonHTMLAttributes, FC } from 'react'

interface PostControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PostControl: FC<PostControlProps> = ({
  className,
  onClick,
  ...props
}) => {
  const baseStyles =
    'flex gap-1 p-1 items-center text-sm font-semibold text-txt-500 rounded-lg transition-colors easy-in-out'

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
