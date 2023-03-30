import { lazy, Suspense } from 'react'

import { BrowserRouter, Routes as RoutesDom, Route } from 'react-router-dom'

import { Register } from '@/modules/register'
import { CellPhone, Password, Profile } from '@/modules/register/components'

const DashboardPage = lazy(() => import('@/pages/dashboard'))
const LoginPage = lazy(() => import('@/pages/login'))
const RegisterPage = lazy(() => import('@/pages/register'))

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <RoutesDom>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />}>
            <Route path='/register' element={<Register />} />
            <Route path='cellphone' element={<CellPhone />} />
            <Route path='password' element={<Password />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='/' element={<DashboardPage />} />
          <Route
            path='*'
            element={
              <div
                style={{
                  display: 'flex',
                  marginTop: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h3>NOT FOUND </h3>
              </div>
            }
          />
        </RoutesDom>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
