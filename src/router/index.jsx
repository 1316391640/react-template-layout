import { Navigate } from 'react-router-dom'
import asyncRoutes from './asyncRouter'
import Login from '@/views/Login'
import Index from '@/views'
import NotFind from '@/views/NotFind'
const routes = [
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '/',
    element: <Index />,
    children: [...asyncRoutes]
  },
  {
    path: '/404',
    element: <NotFind />
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]
export default routes
