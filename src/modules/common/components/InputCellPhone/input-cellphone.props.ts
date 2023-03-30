import { InputHTMLAttributes } from 'react'

import { Control } from 'react-hook-form'

export interface InputCellPhoneProps
  extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string
  label: string
  error?: boolean
  control?: Control<any>
  rules?: any
}
