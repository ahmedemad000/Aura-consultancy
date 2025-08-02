import React from 'react';
import ReactDOM from 'react-dom/client';
import { lazy, Suspense } from 'react';
import './index.css';

const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
      </div>
    }>
      <App />
    </Suspense>
  </React.StrictMode>
);