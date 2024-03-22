import React, { lazy } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
const Home = lazy(() => import('@/views/Home/index'))
const PeopleManagement = lazy(() => import('@/views/PeopleManagement/index'))
const ChartManagement = lazy(() => import('@/views/ChartManagement/index'))
const asyncElement = (component) => (
  <React.Suspense fallback={<div>加载中...</div>}>{component}</React.Suspense>
)
const asyncRoutes = [
  {
    path: '/home',
    element: asyncElement(<Home />),
    meta: {
      title: '主页',
      key: 'home',
      icon: <UploadOutlined />
    }
  },
  {
    path: '/jurisdiction',
    element: <Outlet />,
    meta: {
      title: '权限管理',
      key: 'jurisdiction',
      icon: <UserOutlined />
    },
    children: [
      {
        path: '/jurisdiction',
        element: <Navigate to="/jurisdiction/peopleManagement" />,
        meta: {
          noShow: true
        }
      },
      {
        path: 'peopleManagement',
        element: asyncElement(<PeopleManagement />),
        meta: {
          title: '人员管理',
          key: 'peopleManagement',
          icon: <VideoCameraOutlined />
        }
      }
    ]
  },
  {
    path: '/chart',
    element: <Outlet />,
    meta: {
      title: '图表',
      key: 'chart',
      icon: <UserOutlined />
    },
    children: [
      {
        path: '/chart',
        element: <Navigate to="/chart/chartManagement" />,
        meta: {
          noShow: true
        }
      },
      {
        path: 'chartManagement',
        element: asyncElement(<ChartManagement />),
        meta: {
          title: '图表管理',
          key: 'chartManagement',
          icon: <VideoCameraOutlined />
        }
      }
    ]
  }
]
export default asyncRoutes
