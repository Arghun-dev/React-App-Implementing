import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { StylesProvider, jssPreset } from '@material-ui/core/styles'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { getDirection } from './localization/index'
import ThemeProvider from './components/themeProvider'
import MasterLayout from './screens/MasterLayout'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

function App() {
  return getDirection() === 'ltr' ? (
    <ThemeProvider>
      <StylesProvider>
        <CssBaseline />
        <MasterLayout />
      </StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <MasterLayout />
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
