import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

import {
  Button,
  Input,
  ModalConfirmEmail,
  Text,
} from '@/modules/common/components'
import { validations } from '@/modules/common/utils'
import { useModal } from '@/hooks'

import { DivForm, DivInput, Form } from '../../register.style'
import { FormData } from './profile.interface'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'all',
  })
  const { isModalVisible, toggleModal } = useModal(false)

  const onSubmit = handleSubmit((data) => {
    console.info('Form submitted. Data:', data)
    toggleModal()
  })

  const onConfirmModal = () => {
    navigate(-4)
  }

  return (
    <>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Form onSubmit={onSubmit} noValidate>
          <DivForm>
            <Text weight='font-bold' size='text-2xl' className='text-center'>
              Datos personales
            </Text>

            <Input
              control={control}
              name='photo'
              type='file'
              accept='image/*'
              rules={{
                required: '*Completar la información',
              }}
              error={Boolean(errors.photo)}
              helperText={errors.photo?.message}
            />
            <DivInput>
              <Input
                control={control}
                name='name'
                label='Nombres'
                type='text'
                rules={{
                  required: '*Completar la información',
                  minLength: { value: 2, message: 'Mínimo 2 caracteres' },
                }}
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />

              <Input
                control={control}
                name='lastName'
                label='Apellidos'
                type='text'
                rules={{
                  required: '*Completar la información',
                  minLength: { value: 2, message: 'Mínimo 2 caracteres' },
                }}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
              />

              <Input
                control={control}
                name='typeIdentifier'
                type='select'
                rules={{
                  required: '*Completar la información',
                }}
                defaultValue={'cc'}
                error={Boolean(errors.typeIdentifier)}
                helperText={errors.typeIdentifier?.message}
                options={[
                  {
                    id: 'cc',
                    name: 'Cédula de ciudadanía',
                  },
                  {
                    id: 'ce',
                    name: 'Cédula de extranjería',
                  },
                ]}
              />

              <Input
                control={control}
                name='identifier'
                label='Número de identificación'
                type='text'
                rules={{
                  required: '*Completar la información',
                  minLength: { value: 6, message: 'Mínimo 6 caracteres' },
                  validate: {
                    onlyNumbers: validations.isOnlyNumber,
                  },
                }}
                error={Boolean(errors.identifier)}
                helperText={errors.identifier?.message}
              />

              <Input
                control={control}
                name='dateOfBirth'
                label='Fecha de nacimiento'
                type='date'
                rules={{
                  required: '*Completar la información',
                }}
                error={Boolean(errors.dateOfBirth)}
                helperText={errors.dateOfBirth?.message}
              />

              <Button
                type='submit'
                typeStyled='primary'
                rounded
                className='mt-6'
              >
                Siguiente
              </Button>
            </DivInput>
          </DivForm>
        </Form>
      </motion.div>
      <ModalConfirmEmail
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        onConfirmModal={onConfirmModal}
      />
    </>
  )
}
