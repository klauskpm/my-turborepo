import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Login } from './routes/Login';
import { Layout } from './ui/Layout';
import { Dashboard } from './routes/Dashboard';
import { Goals } from './routes/Goals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='login' replace />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'goals',
        element: <Goals />
      }
    ]
  },
]);

export { router };
