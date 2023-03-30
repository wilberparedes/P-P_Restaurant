import tw from 'tailwind-styled-components'

interface ButtonProps {
  $typeStyled: 'primary' | 'info' | 'success' | 'dark'
  $rounded: boolean
  $disabled: boolean
}

export const ButtonStyled = tw.button<ButtonProps>`
${(p) => {
  switch (p.$typeStyled) {
    case 'primary':
      return 'bg-primary'
    case 'info':
      return 'bg-info-600'
    case 'success':
      return 'bg-success'
    default:
      return 'bg-black'
  }
}}
${(p) => (p.$rounded ? 'rounded-md' : '')}
${(p) => (p.$disabled ? 'bg-disabled' : '')}
block
w-full
py-3
text-white
text-base
`
