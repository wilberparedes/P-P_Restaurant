import { lazy, Suspense } from 'react'

import { BrowserRouter, Routes as RoutesDom, Route } from 'react-router-dom'

import { PreloaderComponents } from '@/modules/common/components'

const DashboardPage = lazy(() => import('@/pages/dashboard'))
const LoginPage = lazy(() => import('@/pages/login'))

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PreloaderComponents />}>
        <RoutesDom>
          <Route path='/login' element={<LoginPage />} />
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
