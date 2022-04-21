import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: '15px 20px',
  },
  info: {
    textAlign: 'center',
  },
  creditinfo: {
    lineHeight: '5px',
    fontWeight: 'bold',
    fontSize: '280%',
  },
  date: {
    lineHeight: '3px',
    color: '#a3a5a9',
    fontSize: '12px',
    fontWeight: 300,
  },
  addressinfo: {
    color: '#a3a5a9',
    margin: '5px',
  },
  Div: {
    paddingTop: '40px',
    paddingBottom: '10px',
    fontSize: '12px',
  },
  status: {
    fontSize: '110%',
    fontWeight: 'bold',
    lineHeight: '20px',
  },
  cardnum: {
    float: 'right',
    color: '#a3a5a9',
    fontWeight: 'bold',

    fontSize: '110%',
  },
  Name: {
    color: '#a3a5a9',
    fontSize: '10px',
    fontWeight: 300,
    lineHeight: '20px ',
  },
  Hr: {
    width: '100%',
  },
  creditdiv: {
    paddingTop: '10px',
    paddingBottom: '30px',
  },
  total: {
    fontSize: '110%',
    fontWeight: 600,
  },
  credit: {
    float: 'right',
    fontSize: '140%',
    fontWeight: 600,
  },
}));
