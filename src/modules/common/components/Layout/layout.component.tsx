import { FC, PropsWithChildren } from 'react'

import { useNavigate } from 'react-router-dom'

import { NavBar } from '@/modules/common/components'

import { BackFixed, Body, ContainerBack, LinkSyled } from './layout.style'
import { LayoutProps } from './layout.props'

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  goBack = false,
}) => {
  const navigate = useNavigate()

  return (
    <>
      <NavBar />

      {goBack ? (
        <ContainerBack>
          <BackFixed>
            <LinkSyled
              to={'..'}
              onClick={(e) => {
                e.preventDefault()
                navigate(-1)
              }}
            >
              <i className='icon-back' />
              Anterior
            </LinkSyled>
          </BackFixed>
        </ContainerBack>
      ) : (
        <div className='h-8' />
      )}

      <Body>{children}</Body>
    </>
  )
}
