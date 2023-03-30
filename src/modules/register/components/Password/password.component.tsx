import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Button, Input, Text } from '@/modules/common/components/'

import { DivForm, DivInput, Form, IconPassword } from '../../register.style'
import { FormData } from './password.interface'

export const Password = () => {
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
    navigate('../profile')
  })

  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ stiffness: 150 }}
    >
      <Form onSubmit={onSubmit} noValidate>
        <DivForm>
          <IconPassword />
          <Text weight='font-bold' size='text-2xl' className='text-center'>
            Crea la contraseña de tu cuenta
          </Text>
          <DivInput>
            <Input
              control={control}
              name='password'
              label='Contraseña'
              type='password'
              rules={{
                required: '*Este campo es requerido',
                minLength: { value: 8, message: 'Mínimo 8 caracteres' },
              }}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />

            <Button type='submit' typeStyled='primary' rounded className='mt-6'>
              Siguiente
            </Button>
          </DivInput>
          <Text size='text-sm' className='sm:w-96 w-full mt-6 text-center'>
            Las contraseñas deben tener un mínimo de 8 caracteres, e incluir al
            menos una letra y un número
          </Text>
        </DivForm>
      </Form>
    </motion.div>
  )
}
