import tw from 'tailwind-styled-components'

export const NavbarContainer = tw.div<any>`
bg-primary-500
fixed
w-full
h-16
flex
items-center
p-6
justify-between
z-50
`

export const LogoContainer = tw.div<any>`
flex
justify-start
border-r
border-white
pr-6
`

export const LogoPideyPasa = tw.img<any>`
h-[40px]
w-auto
`

export const TextPideyPasa = tw.img<any>`
h-[40px]
w-auto
white
`

export const SocialMediaContainer = tw.div<any>`
flex
justify-end
border-l
border-white
pl-6
gap-4
`

export const Icon = tw.i<any>`
text-white
text-3xl
`

export const IconFacebook = tw(Icon)`
icon-facebook
`

export const IconInstagram = tw(Icon)`
icon-instagram
`

export const IconTwitter = tw(Icon)`
icon-twitter
`
