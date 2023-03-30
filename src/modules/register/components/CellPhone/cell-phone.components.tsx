import { FC } from 'react'

import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { Button, InputCellPhone, Text } from '@/modules/common/components/'
import { validations } from '@/modules/common/utils'

import { DivForm, DivInput, Form, IconSmartPhone } from '../../register.style'
import { FormData } from './cell-phone.interface'

export const CellPhone: FC = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'all',
  })

  const onSubmit = handleSubmit((data) => {
    console.info('Form submitted. Data:', data)
    navigate('../password')
  })

  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ stiffness: 150 }}
    >
      <Form onSubmit={onSubmit} noValidate>
        <DivForm>
          <IconSmartPhone />
          <Text weight='font-bold' size='text-2xl' className='text-center'>
            Ingresa tu número de teléfono móvil
          </Text>
          <DivInput>
            <InputCellPhone
              control={control}
              name='cellphone'
              label='Número de teléfono móvil'
              type='number'
              rules={{
                required: '*Este campo es requerido',
                validate: {
                  onlyNumbers: validations.isOnlyNumber,
                },
              }}
              error={Boolean(errors.cellphone)}
              helperText={errors.cellphone?.message}
            />

            <Button type='submit' typeStyled='primary' rounded className='mt-6'>
              Siguiente
            </Button>
          </DivInput>
        </DivForm>
      </Form>
    </motion.div>
  )
}
