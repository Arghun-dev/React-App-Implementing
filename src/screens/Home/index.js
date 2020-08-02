/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './HomeStyles/index.styles'

export default function Index() {
  const classes = useStyles()
  return (
    <Grid style={{ height: '100vh' }}>
      <Grid className={classes.main}> </Grid>
    </Grid>
  )
}
