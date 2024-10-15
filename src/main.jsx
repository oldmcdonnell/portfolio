import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

// project styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Use combined App.css
import '../css/style.css'; // Assuming this path is correct

import About from './About';
import App from './App';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import Blog from './Blog';
import MyNavbar from './MyNavbar';
import Header from './Header';
import Footer from './Footer';
import Week6 from './blog/Week6';
import Projects from './Projects';
import { createContext } from 'react';
import PrivacyPaper from './PrivacyPaper';  // Make sure this is the correct path


const site = import.meta.env.BASE_URL;

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <MyNavbar />
      <div id='page-content' className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
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
        path: '/contact', // Ensure the path is lowercase
        element: <Contact />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/privacy-paper',  // Adding the new PrivacyPaper route
        element: <PrivacyPaper />  // This renders the PrivacyPaper component
      }
    ]
  }
], {
  basename: site
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
