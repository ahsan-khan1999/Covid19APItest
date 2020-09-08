/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  let [covid,setCovid] = useState({})
  useEffect(() => {
    async function data() {
      const response = await fetch('https://api.thevirustracker.com/free-api?global=stats');

      let data = await response.json();
      delete data.results[0].source;
      setCovid(data.results[0]);
      console.log(data.results[0])



      // let code = []
      // let total_cases = []
      // const {code,total_cases} =data.countryitems[0][1] 
      // for (var i =1 ;i < data.countryitems[0][i].length ; i++){
      //   console.log(data.countryitems[0][i].code)
        // code.concat(data.countryitems[0][i].code);
        // total_cases.concat(data.countryitems[0][i].total_cases);

      //}

      // console.log(code,total_cases)
      // const res = data.countryitems.filter(item => {
      //   console.log(item)
      // })
      // console.log(res)
      // let {code,total_cases} = data.countryitems[0]
      // console.log(code,total_cases);
    }
    data()
  }

    , [])


  return (
    <div className="App">
      {
        Object.keys(covid).map((val,ind) => {

          return <table style={{marginLeft:600,marginTop:60,textAlign:'center',width:'40%' ,border: '1px solid black',borderCollapse: 'collapse',borderBlock:'black'
          }}>
          <tr key={ind}>
            <th style={{width:'100%' ,border: '5px',borderColor:'black',borderCollapse: 'collapse' , padding:'5px' , textAlign:'left'
          }}>{val}:</th>
            <td style={{width:'100%' ,border: '1px',borderCollapse: 'collapse', padding:'5px' , textAlign:'center'
          }}>{covid[val]}</td>
          </tr>
          
          
        </table>
          // return <li key={ind} >
          //   <h3 style={{backgroundColor:'lightGreen', textTransform:'uppercase'}}> {val.replace(/_/g,' ')}</h3>
          //   <hr />
          //   <h4 style={{backgroundColor:'pink'}}>{covid[val]}</h4>

          // </li>
        })
      }
    </div>
  );
}

export default App;
