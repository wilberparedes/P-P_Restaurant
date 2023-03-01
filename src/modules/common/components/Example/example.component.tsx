import { useAppSelector } from '@/hooks'

import { ExampleContainer } from './example.style'

export const Example = () => {
  const token = useAppSelector((state) => state.token.token)

  return <ExampleContainer>Example: {token}</ExampleContainer>
}
