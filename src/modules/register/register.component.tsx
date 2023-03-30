import { FC } from 'react'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

import {
  Button,
  Input,
  LinkUnderline,
  Text,
} from '@/modules/common/components/'
import { validations } from '@/modules/common/utils'

import { DivForm, DivInput, DivPrivacyTerm, Form } from './register.style'

type FormData = {
  email: string
}

export const Register: FC = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'all',
  })

  const onSubmit = handleSubmit((data) => {
    navigate('../cellphone')
    console.info('Form submitted. Data:', data, 'Submit form - errors', Error)
  })

  return (
    <Form onSubmit={onSubmit} noValidate>
      <motion.div
        className='w-full'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <DivForm>
          <Text weight='font-bold' size='text-2xl' className='text-center'>
            ¿Cuál es tu correo electrónico?
          </Text>
          <DivInput>
            <Input
              control={control}
              name='email'
              label='Ingresa tu correo electrónico'
              type='email'
              rules={{
                required: '*Este campo es requerido',
                validate: validations.isEmail,
              }}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <Button type='submit' typeStyled='primary' rounded className='mt-6'>
              Continuar
            </Button>
          </DivInput>

          <Text size='text-sm' className='sm:w-96 w-full mt-6 text-center'>
            Al continuar, aceptas recibir llamadas, WhatsApp o SMS de Pide y
            Pasa para sus afiliados al número proporcionado, incluso de forma
            automática.
          </Text>
        </DivForm>
      </motion.div>
      <DivPrivacyTerm>
        <Text size='text-sm'>
          Este sitio cuenta con protección de reCAPTCHA y aplica la{' '}
          <LinkUnderline
            to={'https://policies.google.com/privacy'}
            target='_blank'
          >
            Política de privacidad
          </LinkUnderline>
          y los
          <LinkUnderline
            to={'https://policies.google.com/terms'}
            target='_blank'
          >
            Términos del servicio
          </LinkUnderline>
          de Google.
        </Text>
      </DivPrivacyTerm>
    </Form>
  )
}
