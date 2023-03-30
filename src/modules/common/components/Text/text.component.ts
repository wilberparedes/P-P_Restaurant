import tw from 'tailwind-styled-components'

export const Text = tw.span<any>`
${(p) => p.weight || 'font-normal'}
${(p) => p.size}
${(p) => p.color || 'text-text-500'}
`
