import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

export const useStyles = makeStyles(theme => ({
  gridStyle: {
    padding: '10px 20px 20px 20px',
  },
  spanColor: {
    color: '#696969',
    textTransform: 'lowercase',
  },
  Div: {
    textAlign: 'center',
  },
}));
export const PrettoSlider = withStyles({
  root: {
    color: '#ccc!important',
    height: 0,
    padding: '6px 0px 10px 0px',
  },
  thumb: {
    display: 'none',
    height: 0,
    width: 0,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 10,
    color: '#AD9751!important',
    borderRadius: 10,
  },
  rail: {
    height: 10,
    borderRadius: 10,
  },
})(Slider);

export const Gridcontentleft = styled(Grid)`
  text-transform: uppercase !important;
  font-size: 18px;
  font-weight: 600;
`;

export const Golddiv = styled.span`
  font-size: 8px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  padding-top: 10px;
`;

export const Tierimg = styled.div`
  display: inline-block;
  float: left;
  position: static;
  padding-right: 4px;
`;

export const Totaltier = styled.span`
  font-size: 11px;
  padding-left: 5px;
  float: left;
  font-size: 11px;
  font-family: 'Open Sans', sans-serif;
`;

export const Alltier = styled.span`
  padding-right: 5px;
  float: right;
  font-size: 11px;
  float: right;
  font-family: 'Open Sans', sans-serif;
`;
