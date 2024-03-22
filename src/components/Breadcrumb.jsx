import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'
const BREADCRUMB = () => {
  const route = useLocation()
  const items = useMemo(() => {
    const arr = [
      {
        title: 'Home'
      }
    ]
    const keyPath = route.pathname.split('/')
    keyPath.shift()
    keyPath.forEach((item) => {
      arr.push({
        title: item
      })
    })
    return arr
  }, [route])
  return (
    <>
      <Breadcrumb items={items} />
    </>
  )
}
export default BREADCRUMB
