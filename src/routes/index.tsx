import { createBrowserRouter } from 'react-router-dom';
import * as page from '../pages'


export const AppRoutes =  createBrowserRouter([
    {
      path: '*',
      element: page.Home()
    },
    // {
    //   path: '/about',
    //   element: page.About()
    // },
    // {
    //   path: '/contact',
    //   element: page.Contact()
    // },
    // {
    //   path: '/projects',
    //   element: page.Projects()
    // },
    // {
    //   path: '/tech',
    //   element: page.TechStack()
    // }
]); 