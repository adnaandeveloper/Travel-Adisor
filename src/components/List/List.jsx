import React, { useState } from 'react';
import {
  Grid,
  CircularProgress,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const data = [
  {
    value: 0,
    title: 'All',
  },
  {
    value: 3,
    title: 'above 3.',
  },
  {
    value: 4,
    title: 'above 4.',
  },
  {
    value: 4.5,
    title: 'above 4.5',
  },
];

const places = [
  {
    name: 'Masjid attaqwaa',
  },
  {
    name: 'Masjid Nuur',
  },
  {
    name: 'Masjid Salaam',
  },
  {
    name: 'Masjid Towfiiq',
  },
  {
    name: 'Masjid Salsabiil',
  },
  {
    name: 'Masjid Bilaal',
  },
];
const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('Restuarants');
  const [rating, setRating] = useState('');
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restuarants, Hotels & attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          {['Restuarants', 'RestuHotelsarants', 'attractions'].map(
            (item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          {data.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {' '}
              s{item.title}{' '}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid key={i} item xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
