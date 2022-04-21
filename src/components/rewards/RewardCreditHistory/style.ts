import styled from 'styled-components';
import { IconButton, ListItemText, makeStyles } from '@material-ui/core';

export const Transactionsbody = styled.div`
  background-color: #fff;
  margin-top: -30px !important;
  @media (max-width: 748px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const Transubhead = styled.p`
  padding-left: 10px;
  font-size: 12px;
  display: block;
`;

export const Arrowtrans = styled(IconButton)`
  display: inline-block;
  position: relative;
  top: -13px;
  color: #c4c4c6;
`;

export const Listrighttext = styled(ListItemText)`
  display: inline-block;
  margin-top: 18px !important;
  text-align: right;
`;

export const Ceheading = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
  display: inline-block;
  margin-top: 5px;
  margin-left: 10px;
  padding-top: 10px;
`;
export const useStyles = makeStyles(theme => ({
  Div: {
    paddingTop: '30px',
  },
  DivStyle: {
    textAlign: 'center',
  },
}));
