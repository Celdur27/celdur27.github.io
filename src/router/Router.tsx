import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/Error';
import CountriesPage from '../pages/Countries';
import CountryPage from '../pages/Country';

const router = createBrowserRouter([
  {
    path: '/countries-api',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CountriesPage />,
      },
      {
        path: '/countries-api/:name',
        element: <CountryPage />,
      },
    ],
  },
]);

export default function Router(): JSX.Element {
  return <RouterProvider router={router} />;
}
