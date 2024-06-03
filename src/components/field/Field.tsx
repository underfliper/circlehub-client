'use client'
import cn from 'classnames'
import { CircleAlert, Eye, EyeOff } from 'lucide-react'
import React, { FC, InputHTMLAttributes, forwardRef, useState } from 'react'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

interface ShowPasswordButtonProps {
  isVisible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ShowPasswordButton: FC<ShowPasswordButtonProps> = ({
  isVisible,
  setVisible,
}) => {
  return (
    <button
      className="p-2 h-full text-txt-500 outline-none hover:text-primary-600 transition-colors ease-in-out"
      type="button"
      onClick={() => setVisible(!isVisible)}>
      {isVisible ? <EyeOff /> : <Eye />}
    </button>
  )
}

const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ label, error, id, type, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const baseStyles =
      'flex items-center bg-background-100 rounded-lg outline outline-2 outline-transparent transition ease-in-out'
    const hoverStyles = 'hover:outline-primary-400'
    const focusStyles = 'focus-within:outline-primary-600'
    const focusHoverStyles = 'focus-within:hover:outline-primary-600'
    const errorStyles = 'outline-red-500 hover:outline-red-500'

    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
        <div
          className={cn(
            baseStyles,
            hoverStyles,
            focusStyles,
            focusHoverStyles,
            { [`${errorStyles}`]: !!error },
          )}>
          <input
            id={id}
            className="w-full p-2 bg-transparent outline-none hover:border-pr"
            type={isPasswordVisible ? 'text' : type}
            ref={ref}
            {...props}
          />
          {type === 'password' && (
            <ShowPasswordButton
              isVisible={isPasswordVisible}
              setVisible={setIsPasswordVisible}
            />
          )}
        </div>
        {error && (
          <div className="flex gap-2 items-center text-sm text-red-500">
            <CircleAlert size={18} />
            <span>{error}</span>
          </div>
        )}
      </div>
    )
  },
)

export default Field
