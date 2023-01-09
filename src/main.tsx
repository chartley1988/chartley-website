import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './components/pages/error/error';
import AboutMe from './components/pages/about_me/about_me';
import Blog from './components/pages/blog/blog';
import Home from './components/pages/home/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'chartley-website',
        element: <Home />
      },
      {
        path: 'chartley-website/about-me',
        element: <AboutMe />
      },
      {
        path: 'chartley-website/blog',
        element: <Blog />
      },
      {
        path: 'chartley-website/home',
        element: <Home />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
