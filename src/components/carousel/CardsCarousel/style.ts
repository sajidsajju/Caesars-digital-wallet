import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  main: {
    paddingTop: '10px',
    paddingLeft: '10px',
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 20%)',
  },
  rewardCardActive: {
    width: '310px',
    height: '197px',
    '@media(min-width: 1024px)': {
      width: '298px',
    },
  },
  rewardCardNonActive: {
    width: '254px',
    height: '209px',
    marginTop: '10px',
    '@media(min-width: 1024px)': {
      width: '241px',
      height: '209px',
      marginLeft: '24px',
    },
    '@media(min-width: 1200px)': {
      height: '206px!important',
      marginLeft: '-38px!important',
    },
    '@media(min-width: 1400px)': {
      height: '206px!important',
      marginLeft: '-75px!important',
    },
    '@media(min-width: 1600px)': {
      height: '205px!important',
      marginLeft: '-120px!important',
    },
  },
  CashCardActive: {
    width: '310px',
    height: '197px',
    '@media(min-width: 1024px)': {
      width: '285px',
    },
  },
  CashCardNonActive: {
    width: '254px',
    height: '209px',
    marginTop: '10px',
    '@media(min-width: 1024px)': {
      width: '220px!important',
      height: '212px!important',
      marginLeft: '40px!important',
    },
    '@media(min-width: 1200px)': {
      marginLeft: '-25px!important',
      height: '226px!important',
    },
    '@media(min-width: 1400px)': {
      marginLeft: '-60px!important',
      height: '226px!important',
    },
    '@media(min-width: 1600px)': {
      marginLeft: '-120px!important',
      height: '226px!important',
    },
  },

  rewardWrap: {
    position: 'relative',
  },
  rewardTextWrap: {
    position: 'absolute',
    top: '3.5em',
    left: '1.2em',
    color: '#fff',
  },
  rewardTextWrapOut: {
    position: 'absolute',
    top: '3.5em',
    left: '1.2em',
    color: '#fff',
    '@media(min-width: 1024px)': {
      left: '2.5em',
    },
    '@media(min-width: 1200px)': {
      left: '-1.9em',
      top: '3.2em',
    },
    '@media(min-width: 1400px)': {
      left: '-4.6em',
      top: '3.2em',
    },
    '@media(min-width: 1600px)': {
      left: '-7.6em',
      top: '3.2em',
    },
  },
  rewardsId: {
    position: 'relative',
    top: '1.5em',
    fontSize: '14px',
    fontWeight: 300,
  },
  rewardNumber: {
    position: 'absolute',
    top: '1.3em',
    fontSize: '22px',
    fontWeight: 700,
  },
  rewardsCreditText: {
    position: 'relative',
    top: '3.5em',
    fontSize: '14px',
    fontWeight: 300,
  },
  rewardsCredits: {
    position: 'relative',
    top: '1.2em',
    fontSize: '22px',
    fontWeight: 700,
  },
  cashWrap: {
    position: 'relative',
  },
  cashCardText: {
    position: 'absolute',
    top: '7em',
    left: '1.2em',
    color: '#fff',
    lineHeight: '5px',
    fontSize: '16px',
  },
  cashCardTextOut: {
    position: 'absolute',
    top: '10.5em',
    left: '1.2em',
    color: '#fff',
    lineHeight: '5px',
    fontSize: '12px',
    '@media(min-width: 1024px)': {
      left: '4.2em',
    },
    '@media(min-width: 1200px)': {
      left: '-0.8em',
    },
    '@media(min-width: 1400px)': {
      left: '-4em',
    },
    '@media(min-width: 1600px)': {
      left: '-9.1em',
    },
  },
  cashCardBalance: {
    position: 'absolute',
    top: '6.2em',
    left: '1em',
    color: '#fff',
    '@media(min-width: 1024px)': {
      left: '1em',
    },
  },
  cashCardBalanceOut: {
    position: 'absolute',
    top: '6.2em',
    left: '0.9em',
    color: '#fff',
    '@media(min-width: 1024px)': {
      left: '3.5em',
    },
    '@media(min-width: 1200px)': {
      left: '-0.9em',
    },
    '@media(min-width: 1400px)': {
      left: '-3.6em',
    },
    '@media(min-width: 1600px)': {
      left: '-7.8em',
    },
  },
  cashBalanceText: {
    position: 'relative',
    top: '1em',
    fontSize: '14px',
    fontWeight: 300,
  },
  cashBalance: {
    position: 'absolute',
    top: '1em',
    fontSize: '24px',
    fontWeight: 700,
  },
  cashTextRight: {
    position: 'absolute',
    top: '1.3em',
    left: '10.4em',
    color: '#fff',
    lineHeight: '5px',
    fontSize: '18px',
    fontWeight: 600,
    textTransform: 'uppercase',
    '@media(min-width: 1024px)': {
      left: '9.1em',
    },
  },
  cashTextRightOut: {
    position: 'absolute',
    top: '3.5em',
    left: '7.4em',
    color: '#fff',
    lineHeight: '5px',
    fontSize: '18px',
    fontWeight: 600,
    textTransform: 'uppercase',
    '@media(min-width: 1024px)': {
      top: '3.5em',
      left: '7.8em',
    },
    '@media(min-width: 1200px)': {
      left: '4.2em',
      top: '3.8em',
    },
    '@media(min-width: 1400px)': {
      left: '2.5em',
      top: '3.8em',
    },
    '@media(min-width: 1600px)': {
      left: '-1.1em',
      top: '3.8em',
    },
  },
}));
