import { InputHTMLAttributes } from 'react'

import { Control } from 'react-hook-form'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string
  label?: string
  error?: boolean
  control?: Control<any>
  rules?: any
  options?: any[]
}
