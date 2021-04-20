import React from 'react';

import Application from './components/App';
import './App.css';

function App() {
  return (
    <Application children={<div>test</div>}></Application>
  );
}

export default App;
