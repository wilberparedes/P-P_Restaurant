import tw from 'tailwind-styled-components'

export const Label = tw.label<any>`
block
mt-1
`

export const LabelTitle = tw.span<any>`
fadeIn
${(p) =>
  p.$isFocus || p.$field?.value
    ? p.$error
      ? 'text-primary'
      : 'text-text'
    : 'text-white'}
text-sm
font-medium
`

export const InputStyled = tw.input<any>`
pr-5
pl-14
py-4
bg-gray-50
placeholder-text
block
w-full
rounded-md
text-base
font-normal
text-text
`

export const DivInputs = tw.div<any>`
flex
flex-row
items-center
gap-3
relative
`

export const InputSelectStyled = tw.select<any>`
px-3
py-4
min-w-[70px]
bg-gray-50
placeholder-text
rounded-md
`

export const HelperText = tw.span<any>`
mt-2
ml-4
${(p) => (p.$error ? 'text-primary-500' : 'text-text')}
text-sm
`
