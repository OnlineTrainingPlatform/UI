import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import { LandingPage } from './Pages/LandingPage';
import { ExercisePage } from './Pages/ExercisePage';
import { StatisticsPage } from './Pages/StatisticsPage';
import { Layout } from './Components/Layout/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="exercises">
          <Route path=":exerciseID" element={<ExercisePage />} />
          <Route path=":exerciseID/statistics" element={<StatisticsPage />} />
        </Route>
      </Route>
    </>,
  ),
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
