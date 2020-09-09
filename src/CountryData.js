import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './App.css';

function CountryData() {
  let [country, setCountry] = useState({})
  useEffect(() => {
    async function data() {
      const response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');

      let data = await response.json();
    //   setCovid(data.Countryitems);
      
      
      console.log(Object.values(Object.values(data.countryitems)[0]));
        // console.log(country);
        setCountry(Object.values(Object.values(data.countryitems)[0]))

      
      
    }
    data()
  }

    , [])


  const classes = useStyles();
//   console.log(country);
  return (

    <div className={classes.root}>
      <h1 style={{textAlign:'center'}}>Covid-19 API Data </h1>
      <Grid container spacing={3}>
        {
          Object.keys(country).map((value, ind) => {
            return <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper} elevation={3}>
                <h2 style={{color:'purple'}}>{country[ind].title}</h2>
                <h3 style={{color:'green'}}>{country[ind].total_cases}</h3>
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
export default CountryData;