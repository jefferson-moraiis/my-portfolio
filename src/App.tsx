import { RouterProvider } from "react-router-dom";
import { AppRoutes } from './routes'

export const App = () => {
  return <RouterProvider router={AppRoutes} />
}

