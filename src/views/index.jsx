import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Button, theme } from 'antd'
import Menu from '@/components/Menu'
import Breadcrumb from '@/components/Breadcrumb'
const { Header, Sider, Content } = Layout
import style from './index.module.scss'
const Index = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()
  return (
    <Layout className={style['layout']}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={style['demo-logo-vertical']} />
        <Menu />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
        </Header>
        <div className={style['breadcrumb']}>
          <Breadcrumb />
        </div>
        <Content
          style={{
            margin: '16px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Index
