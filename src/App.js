/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import GlobalData from './GlobalData'
import './App.css';
import BottomNav from './BottomNav';
import CountryData from './CountryData';
import ConditionalRender from './ConditionalRender';

function App() {
  let ren = useState(0);
  return(
<div>
  <ConditionalRender stat={ren}/>
  <BottomNav stat={ren}/>
  </div>
  )
}
export default App;
