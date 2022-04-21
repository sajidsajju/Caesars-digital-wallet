import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  HR: {
    border: '0.1px solid #c5c5c5',
  },
  Description: {
    paddingLeft: '3.5rem',
  },
  IconDiv: {
    float: 'left',
    width: '50px',
    paddingTop: '7px',
  },
  Link: {
    float: 'right',
    color: '#A52A2A',
    textDecoration: 'none',
    fontWeight: 500,
  },
  redeems: {
    padding: '1em 1.5em',
  },
  name: { fontWeight: 'bold' },
  SecondDiv: {
    padding: '0.5em 0em',
    marginBottom: '20px',
  },
}));

export const circle = {
  color: '#dcdcdc',
  width: '2.5em',
  height: '2.5em',
};
