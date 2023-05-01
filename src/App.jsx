import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { router } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      {router}
    </BrowserRouter>
  );
}

export default App;