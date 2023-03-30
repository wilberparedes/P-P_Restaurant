import tw from 'tailwind-styled-components'

export const ContainerModal = tw.div<any>`
absolute
top-0
left-0
right-0
bottom-0
inset-0
z-50
overflow-y-auto`

export const Shadow = tw.div<any>`
z-0
fixed
w-full
h-full
bg-black/60`

export const Content = tw.div<any>`
z-10
flex
min-h-full
items-end
justify-center
text-center
sm:items-center
sm:p-0`

export const ContentModal = tw.div<any>`
bg-white
relative
transform
overflow-hidden
rounded-t-xl
sm:rounded-2xl
text-left
shadow-xl
transition-all
sm:my-8
w-full
sm:max-w-[640px]
max-sm:mt-[100px]`
