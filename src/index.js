import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalEmployeeCreated } from './lib';

/**
 * Entry point of the application.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalEmployeeCreated />
  </React.StrictMode>
);
