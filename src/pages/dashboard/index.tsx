import { Navigate, useLocation } from 'react-router-dom'

import { useAppSelector } from '@/hooks'
import { Dashboard } from '@/modules/dashboard'
import { selectTokenStore } from '@/store/slice/token'
import { Layout } from '@/modules/common/components'

const DashboardPage = () => {
  const token = useAppSelector(selectTokenStore)
  const location = useLocation()

  if (!token) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}
export default DashboardPage
