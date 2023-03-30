import { FC } from 'react'

import {
  ContainerDescription,
  ContainerModal,
  ContainerTitleModal,
  Modal,
  Text,
} from '@/modules/common/components'

import { ModalInvalidRequestProps } from './modal-invalid-request.props'
import { ContainerIconClose, IconClose } from './modal-invalid-request.style'

export const ModalInvalidRequest: FC<ModalInvalidRequestProps> = ({
  isVisible,
  toggleModal,
}) => {
  return (
    <Modal isVisible={isVisible} closeModal={toggleModal}>
      <ContainerIconClose onClick={toggleModal}>
        <IconClose />
      </ContainerIconClose>
      <ContainerModal className='sm:pt-0'>
        <ContainerTitleModal>
          <Text size='text-2xl' weight='font-bold'>
            Solicitud no válida
          </Text>
        </ContainerTitleModal>
        <ContainerDescription
          $width='sm:w-3/4'
          className='flex flex-col items-center mt-4'
        >
          <Text size='text-base' className='text-center block'>
            Hubo un error al procesar la solicitud.
          </Text>
        </ContainerDescription>
      </ContainerModal>
    </Modal>
  )
}
