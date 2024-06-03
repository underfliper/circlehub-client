import cn from 'classnames'
import React, { FC, FormHTMLAttributes } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string
  footerContent?: React.ReactNode
}

const Form: FC<FormProps> = ({
  title,
  footerContent,
  children,
  className,
  ...props
}) => {
  return (
    <form
      className={cn(
        'flex flex-col gap-2 p-4 bg-background-50 rounded-xl',
        className,
      )}
      {...props}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <span className="w-full h-[2px] block bg-background-100"></span>
      {children}
      {footerContent && (
        <>
          <span className="w-full h-[2px] block bg-background-100 rounded"></span>
          {footerContent}
        </>
      )}
    </form>
  )
}

export default Form
