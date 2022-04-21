import { makeStyles, styled } from '@material-ui/core';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'grey',
    color: 'white',
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    color: 'black',
  },
}));
export const circle = {
  color: '#dcdcdc',
  width: '2.5em',
  height: '2.5em',
  // paddingTop: '10px',
  // paddingRight: '30px',
  marginRight: '-15px',
};

export const useStyles = makeStyles(() => ({
  font: {
    paddingLeft: '23px',
    fontFamily: 'Montserrat, sans-serif',
  },
  padding: {
    paddingLeft: '20px',
  },
  tableWidth: {
    width: '32%',
  },

  title: {
    width: '45% !important',
    fontSize: '100% !important',
    fontFamily: 'Montserrat, sans-serif !important',
  },
  tabStyle: {
    width: '30em !important',
    fontSize: '100% !important',
    fontFamily: 'Montserrat, sans-serif !important',
  },
  eachrow: {
    marginLeft: '10px',
    marginRight: '10px',
  },
}));
