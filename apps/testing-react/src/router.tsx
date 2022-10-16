import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from './routes/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='login' replace />
  },
  {
    path: 'login',
    element: <Login />
  }
]);

export { router };
