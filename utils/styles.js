import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: theme.palette.primary.main,
    },
    hero: {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-bg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
    },
    about: {
      padding: theme.spacing(10, 0),
      backgroundColor: '#fff',
    },
    stats: {
      padding: theme.spacing(10, 0),
      backgroundColor: '#f9f9f9',
    },
    oath: {
      padding: theme.spacing(10, 0),
      backgroundColor: '#fff',
    },
    praise: {
      padding: theme.spacing(10, 0),
      backgroundColor: '#f9f9f9',
    },
    footer: {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      padding: theme.spacing(4),
    },
  }));
  