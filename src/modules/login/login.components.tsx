import { useForm } from 'react-hook-form'

import { useAppDispatch, useModal } from '@/hooks'
import { Input, Button, ModalInvalidRequest } from '@/modules/common/components'
import { saveToken } from '@/store/slice/token'

import {
  ContainerDivForm,
  ContainerDivRight,
  ContainerLogo,
  ContainerPage,
  ForgetPassword,
  ImageLoginLeft,
  LinkRegister,
  Logo,
  NotAccount,
  PideyPasaText,
} from './login.style'
import { FormData } from './login.interface'

export const Login = () => {
  const dispatch = useAppDispatch()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'all',
  })
  const { isModalVisible, toggleModal } = useModal(false)

  const onSubmit = handleSubmit((data) => {
    console.info('Form submitted. Data:', data, 'Submit form - errors', Error)
    dispatch(saveToken(`HolaMundo ${new Date().toDateString()}`))
  })

  return (
    <ContainerPage>
      <ImageLoginLeft />

      <ContainerDivRight>
        <ContainerLogo onClick={toggleModal}>
          <Logo src={'/images/logo-primary.svg'} alt='Logo Pide & Pasa' />
          <PideyPasaText
            src={'/images/pide-y-pasa-text.svg'}
            alt='Text Pide & Pasa'
          />
        </ContainerLogo>

        <ContainerDivForm>
          <form onSubmit={onSubmit} noValidate>
            <Input
              control={control}
              name={'username'}
              label='Correo electrónico o teléfono'
              type='text'
              rules={{
                required: '*Este campo es requerido',
              }}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
            />

            <Input
              control={control}
              name='password'
              label='Contraseña'
              type='password'
              rules={{
                required: '*Este campo es requerido',
                minLength: { value: 6, message: 'Mínimo 6 caracteres' },
              }}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />

            <Button type='submit' typeStyled='primary' rounded className='mt-6'>
              Iniciar sesión
            </Button>

            <ForgetPassword>¿Olvidaste tu contraseña?</ForgetPassword>
            <NotAccount>
              ¿No estás registrado?
              <LinkRegister to='/register'>!Clic aquí!</LinkRegister>
            </NotAccount>
          </form>
        </ContainerDivForm>
      </ContainerDivRight>

      <ModalInvalidRequest
        isVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </ContainerPage>
  )
}
