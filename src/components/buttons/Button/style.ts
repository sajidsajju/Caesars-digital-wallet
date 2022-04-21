import { makeStyles } from '@material-ui/core';

export const useStyles = (props: any) =>
  makeStyles(() => ({
    button: {
      color: props.style.color,
      background: props.style.bgcolor,
      border: props.style.border,
      width: props.style.width,
      fontWeight: 400,
      marginBottom: '2em',
      letterSpacing: '2px',
      borderRadius: '4px',
      padding: props.style.padding,
      marginTop: '1.5em',
      margin: props.style.margin,
      '&:hover': {
        backgroundColor: props.style.bgcolorhover,
      },
    },
    btnContainer: {
      display: 'flex',
      justifyContent: props.style.justifyContent,
      textTransform: 'uppercase',
    },
  }));
