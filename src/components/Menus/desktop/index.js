/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line react/no-array-index-key
import React from 'react'
import { Hidden, Grid, Typography } from '@material-ui/core'
import useStyles from './index.styles'
import Logo from '../../../assets/images/logo.PNG'
import { getTranslate } from '../../../localization/index'

export default function Desktop() {
  const classes = useStyles()
  const translate = getTranslate()

  return (
    <div className={classes.root}>
      <Grid className={classes.topPart}>
        <Hidden smDown>
          <div className={classes.brandDiv}>
            <img
              src={Logo}
              alt={translate.companyName}
              className={classes.brandImg}
            />
          </div>
          <Typography variant="h5">{translate.companyName}</Typography>
        </Hidden>
      </Grid>
    </div>
  )
}
