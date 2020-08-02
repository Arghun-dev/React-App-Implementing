import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(228, 231, 234)',
    display: 'flex',
    flexWrap: 'wrap',
    height: 45,
    alignItems: 'center',
    padding: 5,
    color: '#23282c',
    background: '#f0f3f5',
    borderTop: '1px solid #c8ced3'
  },
  address: {
    lineHeight: 2,
    fontSize: 14
  },
  brandImg: {
    width: 25,
    height: 25,
    marginRight: 10
  }
}))
