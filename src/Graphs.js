/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Line} from 'react-chartjs-2';


function Graphs() {
    let [graph, setGraph] = useState({})
    useEffect(() => {
      async function data() {
        const response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
  
        let data = await response.json();
      //   setCovid(data.Countryitems);
  
  
        console.log(Object.values(Object.values(data.countryitems)[0]));
          // console.log(country);
          setGraph(Object.values(Object.values(data.countryitems)[0]))
  
                 const d = Object.values(graph).map((val,ind) => {
                     return (graph[ind].title,graph[ind].total_cases) 

                })

        setGraph(d);
   
  
      }
      data()
    }
  
      , [])
  
  
    const classes = useStyles();
  //   console.log(country);
    return (
  
        <div>
        <h2>Line CHart</h2>
        
        <Line data={graph} height={100}/>
      </div>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
          root: {
          marginTop:150
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:'lightGrey',
      marginLeft:8,
      marginRight:8
    },
  }));
  export default Graphs;