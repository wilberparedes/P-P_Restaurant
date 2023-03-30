import { Link } from 'react-router-dom'
import tw from 'tailwind-styled-components'

export const ContainerPage = tw.div<any>`
grid
sm:grid-cols-2
`

export const ImageLoginLeft = tw.div<any>`
min-h-screen
bg-login
bg-cover
bg-center
hidden
sm:block
`

export const ContainerDivRight = tw.div<any>`
bg-white
min-h-screen
pt-6
`

export const ContainerLogo = tw.div<any>`
flex
flex-col
text-center
`

export const Logo = tw.img<any>`
h-[100px]
w-auto
`

export const PideyPasaText = tw.img<any>`
h-[100px]
w-auto
`

export const ContainerDivForm = tw.div<any>`
p-10
`

export const ForgetPassword = tw.p<any>`
mt-14
text-center
text-primary-500
text-sm
`

export const NotAccount = tw.p<any>`
flex
justify-center
mt-4
text-center
text-text-500
text-sm
`

export const LinkRegister = tw(Link)`
text-center
ml-0.5
text-primary-500
text-sm
`
