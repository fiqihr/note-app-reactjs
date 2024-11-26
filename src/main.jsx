import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TambahCatatan from './TambahCatatan.jsx'
import Arsip from './pages/Arsip.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/tambah',
    element: <TambahCatatan />,
  },
  {
    path: '/arsip',
    element: <Arsip />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* <Home /> */}
  </StrictMode>,
)
