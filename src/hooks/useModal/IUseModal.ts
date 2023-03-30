import { Dispatch, SetStateAction } from 'react'

export interface IUseModal {
  isModalVisible: boolean
  setModalIsVisible: Dispatch<SetStateAction<boolean>>
  toggleModal: () => void
  closeModal: () => void
}
