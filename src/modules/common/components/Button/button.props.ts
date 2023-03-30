import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeStyled: 'primary' | 'success' | 'info' | 'dark'
  rounded?: boolean
}
