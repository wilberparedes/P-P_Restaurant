import { useState } from 'react'

export const useModal = (defaultVisible = false) => {
  const [isModalVisible, setModalIsVisible] = useState<boolean>(defaultVisible)

  const toggleModal: () => void = () => {
    setModalIsVisible((state) => !state)
  }

  const closeModal: () => void = () => {
    setModalIsVisible(false)
  }

  return {
    isModalVisible,
    setModalIsVisible,
    toggleModal,
    closeModal,
  }
}
