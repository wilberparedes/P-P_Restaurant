import { FC } from 'react'

import {
  Button,
  ContainerDescription,
  ContainerModal,
  ContainerTitleModal,
  Modal,
  Text,
} from '@/modules/common/components'

import { ModalConfirmEmailProps } from './modal-confirm-email.props'
import { BoxImage } from './modal-confirm-email.style'

export const ModalConfirmEmail: FC<ModalConfirmEmailProps> = ({
  isVisible,
  toggleModal,
  onConfirmModal,
}) => {
  return (
    <Modal isVisible={isVisible} closeModal={toggleModal}>
      <ContainerModal>
        <ContainerTitleModal>
          <Text size='text-3xl' color='text-primary' weight='font-bold'>
            Confirmación de email
          </Text>
        </ContainerTitleModal>
        <ContainerDescription
          $width='sm:w-3/4'
          className='flex flex-col items-center mt-4'
        >
          <Text size='text-lg' className='text-center block'>
            Enviamos un correo de confirmación para la validación de su cuenta.
          </Text>

          <BoxImage>
            <img src='/images/email.png' alt='email' className='w-24 h-24' />
          </BoxImage>

          <Button
            typeStyled='primary'
            rounded
            className='max-w-xs mt-6'
            onClick={() => {
              onConfirmModal()
              toggleModal()
            }}
          >
            Continuar
          </Button>
        </ContainerDescription>
      </ContainerModal>
    </Modal>
  )
}
