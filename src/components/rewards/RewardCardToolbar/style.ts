import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export const Li = styled(Grid)`
  list-style-type: none;
  line-height: 25px;
  font-size: 14px;
  display: inline;
  padding-inline-start: 10px;
`;

export const Wrap = styled.div`
  display: inline-block;
  clear: both;
  margin-top: 35px;
`;

export const Span = styled.span`
  display: inline-block;
  clear: both;
  margin-top: 10px;
  position: relative;
  top: 19px;
  left: -12%;
`;

export const Gridcontentleft = styled(Grid)`
  text-transform: uppercase !important;
  font-size: 18px;
  font-weight: 600;
`;

export const Gridcontentright = styled(Grid)`
  text-transform: uppercase;
  display: inline-block;
  text-align: right;
  font-weight: 600;

  letter-spacing: 1.5px;
  color: #ad1f23;
  font-size: 12px;
`;

export const Gridcard = styled(Grid)`
  text-align: center;
`;

export const Navimg = styled.div`
  color: #ad1f23;
  background-color: #f8edef;
  border-radius: 75%;
  padding: 0px 2px;
  margin: 0px 5px;
  width: 50px;
  height: 50px;
  font-size: 22px !important;
  @media (min-width: 501px) {
    margin: 0px 0px;
  }
`;

export const Icontext = styled.div`
  font-size: 10px;
  padding-top: 10px;
  padding-right: 5px;
`;

export const Gridcolumn = styled(Grid)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Row = styled.div`
  text-align: center;
  margin: 8px;
  padding: 8px;

  flex: 1;
  @media (min-width: 501px) {
    flex: 0;
  }
  @media (max-width: 320px) {
    margin: 4px;
    padding: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (min-width: 500px) {
    justify-content: left;
  }
`;

export const Navaddmoney = styled.i`
  margin: auto;
  padding: 13px 9px;
  color: #a9283e;
  font-size: 24px;
`;

export const NavimgLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
