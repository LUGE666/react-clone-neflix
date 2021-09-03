import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { memo, Suspense } from 'react'

import routes from '@/router/index'

function App() {
  return memo(() => (
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>{renderRoutes(routes)}</Suspense>
    </BrowserRouter>
  ))
}

export default App
