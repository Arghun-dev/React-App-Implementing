/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import Menu from '@material-ui/icons/Menu'
import { SwipeableDrawer } from '@material-ui/core'
import useStyles from './index.styles'
import Logo from '../../../assets/images/logo.PNG'

export default function Mobile() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const toggleOpenMenu = () => {
    setOpen(!open)
  }
  return (
    <div className={classes.root}>
      <div className={classes.rightMenu} onClick={toggleOpenMenu}>
        <Menu className={classes.rightMenuIcon} />
      </div>
      <div className={classes.centerLogo}>
        <img src={Logo} alt="Daya daru" className={classes.centerImg} />
      </div>

      <SwipeableDrawer
        onOpen={toggleOpenMenu}
        onClose={toggleOpenMenu}
        open={open}
      >
        <div style={{ width: 300 }}>Menu list</div>
      </SwipeableDrawer>
    </div>
  )
}
