import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './LoginStyles/index.styles'
import LoginComponent from '../../components/Login'

export default function Index() {
  const classes = useStyles()
  return (
    <Grid style={{ height: '100vh' }}>
      <Grid className={classes.main}>
        <LoginComponent />
      </Grid>
    </Grid>
  )
}
