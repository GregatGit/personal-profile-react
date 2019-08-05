import React, { Fragment, Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Fab,
  List,
  ListItemAvatar,
  Avatar,
  withStyles,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import Icon from '@mdi/react'
import { mdiLinkedin } from '@mdi/js'
import { mdiGithubCircle } from '@mdi/js'

const styles = theme => ({
  FormControl: {
    width: 300,
  },
})

class ContactDialog extends Component {
  state = {
    open: false,
    number: "0422 347 204"
  }
  
  UNSAFE_componentWillUpdate(nextProps) {
    if (this.state.open !== this.props.openDialog ){
      this.props.openDialogFunc()
      this.setState({ open: this.props.openDialog})
      
    }
  }

  handleToggle = () => {
    this.props.openDialogFunc()
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const { classes } = this.props
    const iconColor = '#FAFAFA'
    return (
      <Fragment>
        <Fab onClick={this.handleToggle} aria-label="Add" size="small">
          <PhoneIcon color="secondary" />
        </Fab>
        <Dialog open={this.state.open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">Contact Details</DialogTitle>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText><a href="mailto:gregdd@outlook.com?subject=contact_from_website&body=Hello"><Button>gregdd@outlook.com</Button></a></ListItemText>
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
                <Icon 
                  path={mdiLinkedin} 
                  size={1.3}
                  color={iconColor}
                />
                </Avatar>
              </ListItemAvatar>
              <ListItemText><Button onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/greg-duncan-458199108/',
                  '_blank'
                )}>https://www.linkedin.com/in/greg-duncan-458199108/</Button></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                <Icon 
                  path={mdiGithubCircle} 
                  size={1.65}
                  color={iconColor}
                />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
              <Button onClick={() =>
                window.open(
                  'https://github.com/GregatGit?tab=repositories',
                  '_blank'
                )}>
              https://github.com/GregatGit/</Button></ListItemText>
            </ListItem>
          </List>

          <DialogActions>
            <Button
              onClick={() => console.log('you clicked')}
              varient="outlined"
              color="secondary"
            >
              Links will open a new tab
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
}

export default withStyles(styles)(ContactDialog)
