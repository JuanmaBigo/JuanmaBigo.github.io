import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { router } from './pages/index';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <BrowserRouter>
      {router}
      <AnimatedCursor
        innerSize={25}
        outerSize={25}
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2}
        innerStyle={{
          backgroundColor: 'rgba(73, 73, 73, 0.85)'
        }}
        outerStyle={{
          backgroundColor: 'rgba(73, 73, 73, 0.288)'
        }}
        trailingSpeed={8}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </BrowserRouter>
  );
}

export default App;