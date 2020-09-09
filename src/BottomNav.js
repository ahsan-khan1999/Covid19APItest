import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    left:0,
    right:0,
    // position:'absolute',
    
  },
});

export default function BottomNav({stat}) {
  const classes = useStyles();
//   const [value, setValue] = React.useState(0);
    console.log(stat)
  return (
    
    <BottomNavigation
      value={stat[0]}
      onChange={(event, newValue) => {
        stat[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Stats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country Stats" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Graphs" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
