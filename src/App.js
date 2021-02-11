import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Editor from './components/Editor/Editor';
import './App.css';

function App() {
  return (
    <div className="App">
		<Navbar />
		<Editor />
    </div>
  );
}

export default App;
