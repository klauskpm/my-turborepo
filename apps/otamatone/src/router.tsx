import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Login } from './routes/login';

import { Layout } from './ui/Layout';

import { Dashboard } from './routes/dashboard';

import { Goals } from './routes/goals';
import { GoalDetails } from './routes/goals/[pid]';

import { Surveys } from './routes/surveys';
import { SurveyDetails } from './routes/surveys/[pid]';

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
            path: ':pid',
            element: <GoalDetails />
          },
        ]
      },
      {
        path: 'surveys',
        children: [
          {
            index: true,
            element: <Surveys />
          },
          {
            path: ':pid',
            element: <SurveyDetails />
          },
        ]
      }
    ]
  },
]);

export { router };
