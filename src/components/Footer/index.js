import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Logo from '../../assets/images/logo.PNG'
import useStyles from './index.styles'
import { getTranslate } from '../../localization/index'

export default function Index() {
  const classes = useStyles()
  const translate = getTranslate()

  return (
    <Grid className={classes.root} container direction="row">
      <div className={classes.brandDiv}>
        <img src={Logo} alt="Daya daru" className={classes.brandImg} />
      </div>
      <Typography className={classes.address} variant="subtitle1">
        {translate.footerText}
      </Typography>
    </Grid>
  )
}
