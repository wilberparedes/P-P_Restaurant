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

export const Divider = tw.div<any>`
h-6
`

export const DivRelative = tw.div<any>`
relative
`

export const InputStyled = tw.input<any>`
px-5
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

export const InputSelectStyled = tw.select<any>`
px-3
py-4
bg-gray-50
rounded-md
block
w-full
text-base
font-normal
text-text-500
`

export const IconPassword = tw.i<any>`
${(p) => (p.$isShow ? 'icon-hide' : 'icon-show')}
absolute
top-3
right-3
bottom-0
mx-auto
my-0
text-2xl
cursor-pointer
`

export const IconCalendar = tw.i<any>`
icon-calendar
absolute
top-3
right-3
bottom-0
mx-auto
my-0
text-2xl
cursor-pointer
text-text
`

export const HelperText = tw.span<any>`
mt-2
ml-4
${(p) => (p.$error ? 'text-primary-500' : 'text-text')}
text-sm
`
