import MomentUtils from '@date-io/moment';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from '@material-ui/core';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import useGetPlaces from '../../hooks/useGetPlaces';
import { getFlights } from '../../redux/flights/actions';
import useStyles from './styles';

const SearchForm = ({ getFlights: getFlightsAction }) => {
  const classes = useStyles();

  const [departDate, handleDepartChange] = useState(moment());
  const [returnDate, handleReturnChange] = useState(moment());

  const [from, setFrom] = useState('');

  const fromPlaces = useGetPlaces(from);

  return (
    <Paper className={classes.paper}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="standard-full-width"
          label="From"
          placeholder="Amsterdam"
          InputLabelProps={{
            shrink: true,
          }}
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <List component="nav">
          {fromPlaces?.map(({ PlaceName, PlaceId }) => (
            <ListItem button>
              <ListItemText primary={`${PlaceName} (${PlaceId})`} />
            </ListItem>
          ))}
        </List>
        <TextField
          id="standard-full-width"
          label="To"
          placeholder="Stockholm"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            label="Depart"
            value={departDate}
            onChange={handleDepartChange}
          />
          <DatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            label="Return"
            value={returnDate}
            onChange={handleReturnChange}
          />
          <Button
            onClick={() => getFlightsAction()}
            variant="contained"
            color="primary"
            size="large"
          >
            Search flights
          </Button>
        </MuiPickersUtilsProvider>
      </form>
    </Paper>
  );
};

SearchForm.propTypes = {
  getFlights: PropTypes.func.isRequired,
};

export default connect(null, { getFlights })(SearchForm);
