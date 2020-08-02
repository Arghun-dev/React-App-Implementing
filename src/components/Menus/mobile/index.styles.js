import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    width: '100%',
    height: 60,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(228, 231, 234)',
    boxShadow: '0 1px 2px rgba(0,0,0,0.15)'
  },
  rightMenu: {
    width: 60,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightMenuIcon: {
    width: 40,
    height: 40
  },
  centerLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerImg: {
    height: 35
  }
}))
