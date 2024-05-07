import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import '../css/style.css'
import About from './About'
import App from './App'
import Contact from './Contact'
import ErrorPage from './ErrorPage'
import Blog from './Blog'
import MyNavbar from './MyNavbar'
import Header from './Header'
import Footer from './Footer'
import Week6 from './blog/Week6'
import Projects from './Projects'
import { createContext } from 'react'

const site = import.meta.env.BASE_URL


function Layout() {
  return (
      <>
        <Header />
        <MyNavbar />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/Contact',
            element: <Contact />
          },
          {
            path: '/Blog',
            element: <Blog />
          },
          {
            path: '/Week6',
            element: <Week6 />
          },
          {
            path: '/Projects',
            element: <Projects />
          },
    ]
  }
], {
  basename: site
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)