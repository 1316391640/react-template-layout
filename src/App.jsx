import { useRoutes } from 'react-router-dom'
import routes from './router/index'
function App() {
  const router = useRoutes(routes)
  return <div className="page">{router}</div>
}

export default App
