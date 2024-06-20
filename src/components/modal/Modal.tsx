import cn from 'classnames'
import { X } from 'lucide-react'
import React, { FC, PropsWithChildren } from 'react'

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
  className?: string
}

const Modal: FC<ModalProps> = ({
  title,
  isOpen,
  setOpen,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 z-10 flex items-center justify-center w-full h-full bg-background-950/40',
        { hidden: !isOpen },
      )}>
      <div
        className={cn(
          'flex flex-col gap-4 p-4 bg-background-50 rounded-xl',
          className,
        )}>
        <div className="flex items-center justify-end">
          {title && (
            <h2 className="w-full font-semibold text-xl text-txt-950">
              {title}
            </h2>
          )}
          <button
            className="text-txt-700 hover:text-red-500 transition-colors easy-in-out"
            onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
        <span className="w-full h-[2px] block bg-background-100"></span>
        {children}
      </div>
    </div>
  )
}

export default Modal
