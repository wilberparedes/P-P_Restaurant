import { useAppSelector } from '@/hooks'
import { selectTokenStore } from '@/store/slice/token'
import { useNavigate } from 'react-router-dom'

import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  LogoContainer,
  LogoPideyPasa,
  NavbarContainer,
  SocialMediaContainer,
  TextPideyPasa,
} from './navbar.style'

export const NavBar = () => {
  const navigate = useNavigate()
  const token = useAppSelector(selectTokenStore)
  return (
    <NavbarContainer>
      <LogoContainer onClick={() => navigate('/', { replace: true })}>
        <LogoPideyPasa src={'/images/logo-white.svg'} alt='Logo pide y Pasa' />
        <TextPideyPasa src={'/images/pide-pasa-text-white.svg'} alt='Logo' />
      </LogoContainer>

      {!token && (
        <SocialMediaContainer>
          <a href='https://facebook.com' target={'_blank'} rel='noreferrer'>
            <IconFacebook />
          </a>
          <a href='https://instagram.com' target={'_blank'} rel='noreferrer'>
            <IconInstagram />
          </a>
          <a href='https://twitter.com' target={'_blank'} rel='noreferrer'>
            <IconTwitter />
          </a>
        </SocialMediaContainer>
      )}
    </NavbarContainer>
  )
}
