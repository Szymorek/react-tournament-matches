import useForm from './useForm'
import validateInfo from './validateInfo'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const FormLogin = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo)
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <div className="form-container">
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Enter your credentials to participate in tournaments.
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>Username</label>
                    <input
                        id='username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input
                        id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className="form-input-btn"
                 qtype='submit'>
                     Login
                 </button>
                 <span className="form-input-login">
                     Don't have account yet? Signup <Link to="/signup">here</Link>!
                 </span>
            </form>
        </div>
        <Hidden only={['sm','md']}>
        <div className="form-content-left">
            <img src="img/img-2.svg" alt="spaceship" className="form-img" />
        </div>
        </Hidden>
        </div>
        </Grid>
    )
}

export default FormLogin
