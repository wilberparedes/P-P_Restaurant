import { IUseExample } from './IUseExample'
import { IUseExampleProps } from './IUseExampleProps'

export const useExample = ({ data1, data2 }: IUseExampleProps): IUseExample => {
  const dataExample = data1
  const dataExample2 = data2
  return {
    dataExample,
    dataExample2,
  }
}
