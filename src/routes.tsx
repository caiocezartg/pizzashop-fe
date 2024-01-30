import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/app/dashboard'
import SignIn from './pages/auth/sign-in'
import { AppLayout } from './pages/layout/app'
import { AuthLayout } from './pages/layout/auth'
import SignUp from './pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
])
