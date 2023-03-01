import { FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h1>Hola Soy Layout</h1>
      {children}
    </>
  )
}
