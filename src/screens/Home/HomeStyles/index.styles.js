import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  main: {
    display: 'flex',
    backgroundColor: '#fff',
    height: '100vh',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}))
