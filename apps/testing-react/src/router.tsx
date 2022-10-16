import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Login } from './routes/login';

import { Layout } from './ui/Layout';

import { Dashboard } from './routes/dashboard';

import { Goals } from './routes/goals';
import { Goal } from './routes/goals/[id]';

import { Surveys } from './routes/surveys';

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
        children: [
          {
            index: true,
            element: <Goals />
          },
          {
            path: ':id',
            element: <Goal />
          },
        ]
      },
      {
        path: 'surveys',
        element: <Surveys />
      }
    ]
  },
]);

export { router };
