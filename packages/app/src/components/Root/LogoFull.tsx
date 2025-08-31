import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  umbrella: {
    width: 32,
    height: 32,
    fill: '#e61616',
  },
  text: {
    fontSize: 24,
    fontWeight: 700,
    color: '#000000',
    fontFamily: 'Arial, sans-serif',
    letterSpacing: '0.5px',
  },
});

const LogoFull = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <svg
        className={classes.umbrella}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.91 1.47 2.27 2.69 3.92 3.49L12 19l1.67-1.67c1.65-.8 3.01-2.02 3.92-3.49C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 1.26-.36 2.45-1.01 3.5-.65 1.05-1.62 1.92-2.78 2.5L12 16l-1.21-1c-1.16-.58-2.13-1.45-2.78-2.5C7.36 11.45 7 10.26 7 9c0-2.76 2.24-5 5-5z"/>
        <path d="M12 20v2"/>
      </svg>
      <span className={classes.text}>TRAVELERS</span>
    </div>
  );
};

export default LogoFull;