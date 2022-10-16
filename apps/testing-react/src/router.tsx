import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Login } from './routes/Login';
import { Dashboard } from './routes/Dashboard';

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
    path: 'dashboard',
    element: <Dashboard />
  }
]);

export { router };
