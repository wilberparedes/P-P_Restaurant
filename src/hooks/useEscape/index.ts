import { useCallback, useEffect } from 'react'

import { IUseEscapeProps } from './IUseEscapeProps'

export const useEscape = ({ onHandle, validations }: IUseEscapeProps) => {
  const onHandleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && validations) {
        onHandle()
      }
    },
    [validations, onHandle]
  )

  useEffect(() => {
    document.addEventListener('keydown', onHandleEsc, false)
    return () => {
      document.removeEventListener('keydown', onHandleEsc, false)
    }
  }, [onHandleEsc])
}
