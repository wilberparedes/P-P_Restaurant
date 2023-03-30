import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAppSelector } from '@/hooks'
import { selectTokenStore } from '@/store/slice/token'
import { Layout } from '@/modules/common/components'

const RegisterPage = () => {
  const token = useAppSelector(selectTokenStore)
  const location = useLocation()
  if (token) {
    return <Navigate to='/' state={{ from: location }} replace />
  }

  return (
    <Layout goBack>
      <Outlet />
    </Layout>
  )
}
export default RegisterPage
