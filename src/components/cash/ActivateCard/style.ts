import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  ceheading: {
    fontSize: '16px',
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'left',
    display: 'block',
    marginTop: '5px',
    marginLeft: '10px',
    paddingTop: '8px',
  },
  activate: {
    marginLeft: '10px',
    display: 'inline-block',
    fontSize: '14px',
    marginTop: '3px',
  },
  iconDiv: {
    display: 'inline',
    marginBottom: '5px',
  },
  spacing: {
    position: 'relative',
    marginLeft: '2.5em',
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '1em',
  },
  span: {
    position: 'absolute',
    bottom: '8px',
    fontSize: '14px',
    marginLeft: '2.5em',
  },
  iconbg: {
    color: '#ad1f23',
    backgroundColor: '#f8edef',
    borderRadius: '75%',
    lineHeight: '46px',
    verticalAlign: 'middle',
    height: '45px',
    width: '45px',
    textAlign: 'center',
    marginLeft: '-1em',
    fontSize: '20px!important',
  },
}));
