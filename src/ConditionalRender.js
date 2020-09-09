/* eslint-disable no-unused-expressions */
import React from 'react';
import GlobalData from './GlobalData'
// import './App.css';
// import BottomNav from './BottomNav';
import CountryData from './CountryData';
import Graphs from './Graphs';
function ConditionalRender({stat}) {

    // return (stat[0]=== 0 ?   : )
    
    if(stat[0] ===0) {
      return <GlobalData />
    }
    else if(stat[0] === 1){
      return <CountryData />
    }
    else{
      return <Graphs />;
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
  // Drawbacks => 1: Conditional rendering does not maintain history on browser.  
    //         => 2: it does'nt change the url just change the screen
    // to avoide the react routers come into play