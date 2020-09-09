/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './App.css';

function App() {
  let [covid, setCovid] = useState({})
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


  const classes = useStyles();
  return (

    <div className={classes.root}>
      <h1 style={{textAlign:'center'}}>Covid-19 API Data </h1>
      <Grid container spacing={3}>
        {
          Object.keys(covid).map((value, ind) => {
            return <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper} elevation={3}>
                <h2 style={{color:'purple'}}>{value.replace(/_/g, ' ').toUpperCase()}</h2>
                <h3 style={{color:'green'}}>{covid[value]}</h3>
             </Paper>
          </Grid>
          })

        }


      </Grid>
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
export default App;
