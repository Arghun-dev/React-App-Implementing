import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  main: {
    display: 'flex',
    backgroundImage: 'url(http://8upload.ir/uploads/f103197056.jpg)',
    backgroundSize: 'cover',
    padding: 150,
    height: '100vh',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}))
