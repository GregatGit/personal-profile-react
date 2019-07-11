import React, { useState } from 'react'
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Toolbar,
  makeStyles,
} from '@material-ui/core'

import ContactDialog from './ContactDialog'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
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
      <AppBar position="fixed">
        <Toolbar>
          <Tabs style={{ flex: 1 }} value={value} onChange={handleChange}>
            {pages.map(page => {
              return <Tab key={page} label={page} />
            })}
          </Tabs>
          <ContactDialog openDialog={openDialog} openDialogFunc={openDialogFunc} />
          <Typography style={{marginLeft: 10}} variant="h4">GREG DUNCAN</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
