import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'

export const Body = tw.div<any>`
pt-14
px-6
pb-6
`

export const ContainerBack = tw.div<any>`
pt-16
`

export const BackFixed = tw.div<any>`
fixed
bg-white
w-full
px-6
py-4
flex
justify-start`

export const LinkSyled = tw(Link)`
flex
font-bold
text-sm
text-info-600
items-center
justify-center`
