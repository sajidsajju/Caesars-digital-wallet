import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: '1.5em 1.5em 0em 1.5em',
  },
  img: {
    width: '3.7em',
    height: '2.4em',
  },
  imgDiv: {
    float: 'left',
    marginTop: '9px',
  },
  li: {
    listStyleType: 'square',
    padding: '0.5em',
  },
  HR: {
    marginTop: '2em',
    border: '0.1px solid #c5c5c5',
    width: '90%',
  },
  cardName: {
    paddingLeft: '4.3em',
    lineHeight: '0.2px',
  },

  spanStyle: {
    float: 'right',
    marginTop: '-3em',
    color: '#808080',
  },
}));
