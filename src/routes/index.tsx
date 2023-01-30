import { createBrowserRouter } from 'react-router-dom';

export const AppRoutes =  createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/home",
      element: <div>Hello Home!</div>,
    },
  ]) 