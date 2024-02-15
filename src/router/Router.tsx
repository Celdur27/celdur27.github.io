import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/Error';
import CountriesPage from '../pages/Countries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CountriesPage />,
      },
    ],
  },
]);

export default function Router(): JSX.Element {
  return <RouterProvider router={router} />;
}
