import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from '@/App.jsx'
import '@/assets/style/varable.scss'
import 'reset-css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  // </React.StrictMode>
)
