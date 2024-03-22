import { useState, useMemo, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import asyncRoutes from '@/router/asyncRouter'
const MENU = () => {
  const [state, setState] = useState({
    openKeys: [],
    selectedKeys: [],
    getItems: (routes) => {
      if (routes instanceof Array) {
        return routes.reduce((prevValue, nextValue) => {
          if (nextValue.children) {
            prevValue.push({
              key: nextValue.meta.key,
              icon: nextValue.meta.icon,
              label: nextValue.meta.title,
              children: state.getItems(nextValue.children)
            })
            return prevValue
          } else {
            if (!nextValue.meta.noShow) {
              prevValue.push({
                key: nextValue.meta.key,
                icon: nextValue.meta.icon,
                label: nextValue.meta.title
              })
            }
            return prevValue
          }
        }, [])
      } else {
        return []
      }
    }
  })
  const router = useNavigate()
  const route = useLocation()
  const items = useMemo(() => {
    return state.getItems(asyncRoutes)
  }, [asyncRoutes])
  useEffect(() => {
    const keyPath = route.pathname.split('/')
    keyPath.shift()
    setState((prevState) => ({
      ...prevState,
      selectedKeys: keyPath,
      openKeys: keyPath.slice(0, keyPath.length - 1)
    }))
  }, [])
  return (
    <Menu
      theme="dark"
      mode="inline"
      items={items}
      openKeys={state.openKeys}
      selectedKeys={state.selectedKeys}
      onOpenChange={(openKeys) => {
        if (openKeys.length > 1) {
          openKeys.shift()
        }
        setState((prevState) => ({
          ...prevState,
          openKeys: openKeys
        }))
      }}
      onClick={({ keyPath }) => {
        setState((prevState) => ({
          ...prevState,
          selectedKeys: keyPath
        }))
        const path = `/${keyPath.reverse().join('/')}`
        router(path)
      }}
    />
  )
}

export default MENU
