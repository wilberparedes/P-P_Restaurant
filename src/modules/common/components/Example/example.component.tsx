import { useAppSelector } from '@/hooks'
import { selectTokenStore } from '@/store/slice/token'
import { ExampleContainer } from './example.style'

export const Example = () => {
  const token = useAppSelector(selectTokenStore)
  return <ExampleContainer>Example: {token} </ExampleContainer>
}
