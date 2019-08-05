import React, { Fragment } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  CssBaseline,
  Container,
  Button,
  List,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import Icon from '@mdi/react'
import { mdiLinkedin } from '@mdi/js'
import { mdiGithubCircle } from '@mdi/js'

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 3,
  },
  container: {
    paddingTop: 50,
    textAlign: 'center',
  },
  listItem: {
    textAlign: 'center',
  },
  paper: {
    marginTop: 25
  }
}))
const Contact = () => {
  const classes = useStyles()
  const iconColor = '#FAFAFA'
return (
  <Fragment>
    <CssBaseline />
    <Container maxWidth="md" className={classes.container}>
      <Paper className={classes.paper}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <a href="mailto:gregdd@outlook.com?subject=contact_from_website&body=Hello">
                <Button>gregdd@outlook.com</Button>
              </a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <CopyToClipboard text="0422 347 204">
                <Button>0422 347 204 (Click to copy)</Button>
              </CopyToClipboard>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Icon path={mdiLinkedin} size={1.3} color={iconColor} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Button
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/greg-duncan-458199108/',
                    '_blank'
                  )
                }
              >
                https://www.linkedin.com
              </Button>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Icon path={mdiGithubCircle} size={1.65} color={iconColor} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Button
                onClick={() =>
                  window.open(
                    'https://github.com/GregatGit?tab=repositories',
                    '_blank'
                  )
                }
              >
                https://github.com/GregatGit/
              </Button>
            </ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Container>
    </Fragment>
  )
}

export default Contact
