import React, { useEffect, useState } from 'react';
import GlobalData from './GlobalData'
import './App.css';
import BottomNav from './BottomNav';
import CountryData from './CountryData';

function ConditionalRender({stat}) {
    
    if(stat[0] ===0) {
      return <GlobalData />
    }
    else if(stat[0] === 1){
      return <CountryData />
    }
    else{
      return ;
    }
  
  
  //   return(
  // <div>
  //   <GlobalData />
   
  //   {/* <CountryData /> */}
  //   <BottomNav stat={ren}/>
  //   </div>
  //   )
  }
  export default ConditionalRender;