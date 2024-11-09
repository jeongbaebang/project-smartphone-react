import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Smartphone from './App.tsx';
import { CustomThemeProvider } from './styles/ThemeProvider.tsx';
import Home from './pages/Home.tsx';
import Todos from './pages/Todos.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Smartphone />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/todos', element: <Todos /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  </StrictMode>
);
