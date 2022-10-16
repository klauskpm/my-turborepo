import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Login } from './routes/Login';
import { Layout } from './ui/Layout';
import { Dashboard } from './routes/Dashboard';

import { Goals } from './routes/Goals';
import { View as ViewGoal } from './routes/goals/View';

import { Surveys } from './routes/Surveys';

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
            element: <ViewGoal />
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
