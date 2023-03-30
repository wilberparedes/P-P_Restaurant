import { FC, PropsWithChildren } from 'react'

import { useEscape } from 'src/hooks'

import { ModalProps } from './modal.props'
import { ContainerModal, Content, ContentModal, Shadow } from './modal.style'

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  isVisible,
  closeModal,
}) => {
  useEscape({ onHandle: closeModal, validations: isVisible })

  if (!isVisible) return null
  return (
    <ContainerModal>
      <Shadow onClick={closeModal} />
      <Content>
        <ContentModal>{children}</ContentModal>
      </Content>
    </ContainerModal>
  )
}
