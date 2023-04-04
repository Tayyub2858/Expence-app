import React from 'react';
import './App.css';
import  Balance  from './components/Balance';
import Header from './components/header';
import {TranscationProvider} from './components/transactionContext';

function App() {
  return (
  <div>
      
    <Header/>
    <Balance/>
    <TranscationProvider />

  </div>
  );
}

export default App;
