import { Navigate, useLocation } from 'react-router-dom'

import { useAppSelector } from '@/hooks'
import { Login } from '@/modules/login'
import { selectTokenStore } from '@/store/slice/token'

const LoginPage = () => {
  const token = useAppSelector(selectTokenStore)
  const location = useLocation()
  if (token) {
    return <Navigate to='/' state={{ from: location }} replace />
  }

  return <Login />
}
export default LoginPage
