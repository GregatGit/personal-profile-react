import React, { Fragment } from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  CssBaseline,
  Tooltip,
} from '@material-ui/core/'
import Avatar from '@material-ui/core/Avatar'
import Icon from '@mdi/react'
import {
  mdiLinkedin,
  mdiGithubCircle,
  mdiReact,
  mdiLanguageJavascript,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiNodejs,
  mdiVisualStudioCode,
  mdiPhone,
  mdiEmail,
} from '@mdi/js'

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  avatar: {
    margin: 3,
  },
}))

export default function Footer(props) {
  const classes = useStyles()
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Tooltip title="Will open linkedin in new tab" placement="top">
            <Avatar
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/greg-duncan-458199108/',
                  '_blank'
                )
              }
              className={classes.avatar}
            >
              <Icon path={mdiLinkedin} size={1.3} color="#3F51B5" />
            </Avatar>
          </Tooltip>
          <Tooltip title="Will open gitHub in new tab" placement="top">
            <Avatar
              onClick={() =>
                window.open(
                  'https://github.com/GregatGit?tab=repositories',
                  '_blank'
                )
              }
              className={classes.avatar}
            >
              <Icon path={mdiGithubCircle} size={1.65} color="#3F51B5" />
            </Avatar>
          </Tooltip>
          <Avatar className={classes.avatar}>
            <Icon path={mdiReact} size={1.3} color="#3F51B5" />
          </Avatar>
          <Avatar className={classes.avatar}>
            <Icon  path={mdiLanguageCss3} size={1.3} color="#3F51B5" />
          </Avatar>
          <Avatar className={classes.avatar}>
            <Icon path={mdiVisualStudioCode} size={1.3} color="#3F51B5" />
          </Avatar>
          <div className={classes.grow} />
          <Avatar className={classes.avatar}>
            <Icon path={mdiNodejs} size={1.3} color="#3F51B5" />
          </Avatar>
          <Avatar className={classes.avatar}>
            <Icon path={mdiLanguageHtml5} size={1.3} color="#3F51B5" />
          </Avatar>
          <Avatar className={classes.avatar}>
            <Icon path={mdiLanguageJavascript} size={1.3} color="#3F51B5" />
          </Avatar>
          <Tooltip title="Send me an email" placement="top">
            <a href="mailto:gregdd@outlook.com?subject=contact_from_website&body=Hello">
              <Avatar className={classes.avatar}>
                <Icon color="#3F51B5" path={mdiEmail} size={1.3} />
              </Avatar>
            </a>
          </Tooltip>
          <Tooltip title="0422 347 204" placement="top">
            <Avatar className={classes.avatar}>
              <Icon path={mdiPhone} size={1.3} color="#3F51B5" />
            </Avatar>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}
