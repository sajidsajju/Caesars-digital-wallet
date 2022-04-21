import { makeStyles } from '@material-ui/core';

export const useStyles = (props: any) =>
  makeStyles(theme => ({
    cardContainer: {
      color: '#FFF',
      paddingTop: '20px',
      // eslint-disable-next-line
      marginRight: props.id == 0 ? '20px' : '.35px',
      position: 'relative' as 'relative',
      fontSize: 12,
      transformOrigin: 'bottom left',
      // eslint-disable-next-line
      transform: `scale(${props.id == 0 ? 1.25 : 1})`,
      transition: `transform 1.2s`,
    },
    cardImg: {
      width: '220px',
      height: 'auto',
    },
    idLabel: {
      fontSize: 10,
      position: 'absolute' as 'absolute',
      margin: 0,
      left: 15,
      bottom: 80,
    },
    idValue: {
      fontSize: 16,
      fontWeight: 700,
      position: 'absolute' as 'absolute',
      margin: 0,
      left: 15,
      bottom: 60,
    },
    creditLabel: {
      fontSize: 10,
      position: 'absolute' as 'absolute',
      margin: 0,
      left: 15,
      bottom: 30,
    },
    creditValue: {
      fontSize: 16,
      fontWeight: 700,
      position: 'absolute' as 'absolute',
      margin: 0,
      left: 15,
      bottom: 10,
    },
    cardTitle: {
      fontSize: 14,
      fontWeight: 700,
      position: 'absolute' as 'absolute',
      margin: 0,
      right: 15,
      top: 35,
    },
  }));
