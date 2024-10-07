import index from '../src/index.css';
import React from 'react';
import Body from './Components/Body';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}


export default App;


