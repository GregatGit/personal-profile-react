import React, { useState } from 'react'
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    flex: 1,
  },
  title: {
    marginLeft: 10,
  },
  appBar: {
    alignItems: 'center',
  }
}))

function NavBar({ pages, showPage, openDialog, openDialogFunc }) {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
    showPage(newValue)
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar >
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            className={classes.tabs}
            value={value}
            onChange={handleChange}
          >
            {pages.map(page => {
              return <Tab key={page} label={page} />
            })}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
