import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
export const useStyles = makeStyles(theme => ({
  preloader: {
    height: '238px',
  },
  cashCardCotainer: {
    marginTop: '-7px',
  },
  transactionCotianer: {
    boxShadow: 'none',
  },
  cashStyle: {
    position: 'relative',
    marginTop: '-5px',
  },
  historyCotainer: {
    marginTop: '40px',
  },
}));

export const style = {
  bgcolor: '#AD1F23',
  color: '#fff',
  textTransform: 'uppercase',
  bgcolorhover: '#A52A2A',
  width: '100%',
  padding: '8px 25px',
};
export const style_viewmore = {
  bgcolor: '#ffffff',
  color: '#A52A2A',
  bgcolorhover: '',
  width: '96%',
  justifyContent: 'center',
};

export const Rewardscards = styled.div`
  display: block;
  background-color: #fff;
  position: relative;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  // margin-bottom: -3em;
  // padding-bottom: 10px;
`;

export const Boxcontent = styled.div`
  padding: 10px;
  padding-top: 19px;
`;

export const Cashcardactive = styled.div`
  background-color: #fff;
  padding: 10px;
  position: relative;
  //border-top: #fff;
  // bottom: 50px;
`;
