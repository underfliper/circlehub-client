import React, { FC, PropsWithChildren } from 'react'
import cn from 'classnames'

interface ContainerProps extends PropsWithChildren {
  className?: string
}

const Container: FC<ContainerProps> = (props) => {
  return (
    <div className={cn('my-0 mx-auto px-4 w-[1328px]', props.className)}>
      {props.children}
    </div>
  )
}

export default Container
