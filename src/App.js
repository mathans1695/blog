import React from 'react';

import DraftEditor from './components/DraftEditor/DraftEditor';

import BoldButton from './components/BoldButton/BoldButton';

import './App.css';

function App() {
  return (
    <div className="App">
		<DraftEditor />
		<BoldButton />
    </div>
  );
}

export default App;
