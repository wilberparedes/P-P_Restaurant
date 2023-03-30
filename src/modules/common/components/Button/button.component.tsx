import { FC, PropsWithChildren } from 'react'

import { ButtonProps } from './button.props'
import { ButtonStyled } from './button.style'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  disabled = false,
  onClick,
  rounded = false,
  type = 'button',
  typeStyled = 'dark',
  ...props
}) => {
  return (
    <ButtonStyled
      {...props}
      $disabled={disabled}
      $rounded={rounded}
      $typeStyled={typeStyled}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonStyled>
  )
}
