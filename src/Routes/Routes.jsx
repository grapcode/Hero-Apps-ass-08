import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import MainLayout from '../Layouts/MainLayout';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import CardDetails from '../Pages/CardDetails';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: () => fetch('/appsData.json'),
      },
      {
        path: '/apps',
        element: <Apps />,
      },
      {
        path: '/installation',
        element: <Installation />,
      },
      {
        path: '/cardDetails/:id',
        element: <CardDetails />,
      },
    ],
  },
]);
