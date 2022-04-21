import styled from 'styled-components';
import { IconButton, ListItemText, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  divStyle: {
    textAlign: 'center',
  },
}));

export const Transactionsbody = styled.div`
  background-color: #fff;
  padding: 4px 10px;
  @media (max-width: 748px) {
    width: 94%;
  }
`;
export const Iconarrow = styled(IconButton)`
  display: inline-block;
  position: relative;
  top: -13px;
`;

export const Listrighttext = styled(ListItemText)`
  display: inline-block;
  margin-top: 18px !important;
  text-align: right;
`;

export const Ceheading = styled.h2`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
  display: inline-block;
  margin-top: 5px;
  margin-left: 10px;
  padding-top: 10px;
`;
export const Seeall = styled.div`
  display: inline-block;
  float: right;
  padding-top: 10px;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #ad1f23;
  font-size: 12px;
  margin-right: 15px;
`;
export const transStyle = {
  padding: '4px 10px',
  backgroundColor: '#fff',
};
export const Div = {
  textAlign: 'center',
};
