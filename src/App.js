import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import './pages/homepage/homepage.styles.scss'
import {Switch, Route} from 'react-router-dom';

const HatsPage =()=> (
<div><h1>WHAT IS THIS</h1></div>

);


function App() {
  return (
    <div>
<switch>
< Route exact={false} path='/' component={Homepage}/>
</switch>
    </div>
  );
}

export default App;
