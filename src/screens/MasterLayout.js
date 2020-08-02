import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Hidden, Grid } from '@material-ui/core'
import useStyles from './MasterLayout.styles'
import DesktopMenu from '../components/Menus/desktop'
import MobileMenu from '../components/Menus/mobile'
import Footer from '../components/Footer'
import Login from './Login'
import Route from '../routes'

export default function MasterLayout() {
  const classes = useStyles()
  const [token, setToken] = useState(
    localStorage.token ? localStorage.token : ''
  )
  return (
    <BrowserRouter>
      {token.length > 0 ? (
        <div className={classes.root}>
          <Hidden smDown>
            <DesktopMenu />
          </Hidden>
          <Hidden mdUp>
            <MobileMenu />
          </Hidden>
          <Grid container className={classes.mainPageGrid}>
            <Route />
          </Grid>
          <Footer />
        </div>
      ) : (
        <div className={classes.root}>
          <Login setToken={setToken} />
        </div>
      )}
    </BrowserRouter>
  )
}
