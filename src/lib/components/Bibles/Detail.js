import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Verses from './Versers'
import {  BrowserRouter,  Route, Switch } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  // toolbar: theme.mixins.toolbar,
});

class ClippedDrawer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bookData: [],
      bible: this.props.bible,
      // id:this.bible.data.id
    }
  }

  componentDidMount() {
    const { match } = this.props
    axios.get(`https://api.scripture.api.bible/v1/bibles/${this.props.bible.id}/books`,{ headers: { 'api-key': '6203c1c09761df55ea32eac2b4f2b09f' } })
      .then( ( response ) => {
        this.setState({
          bookData: response.data.data
        })
        console.log(this.state.bookData)
      })
  }

  // RouteWithSubRoutes = (route) => {
  //   return (
  //     <Route
  //       path={route.path}
  //       render={props => (
  //         // pass the sub-routes down to keep nesting
  //         <route.component {...props} routes={route.routes} />
  //       )}
  //     />
  //   )
  // }
  render(){
  const { classes, bible } = this.props
  const { bookData } = this.state

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {this.state.bible.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {bookData.map((text, index) => (
            <Link to={`/verses/${text.id}`} >
            <ListItem button key={text.name}>
              <Avatar style={{backgroundColor: 'red'}}>{text.name[0].toUpperCase()}
              </Avatar>
              <ListItemText primary={text.name} />
            </ListItem>
            </Link>
          ))}
        </List>
        <Route path={`verses/:id`} component={Verses} />
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Verses />
        <Verses />
        <Verses />
      </main>
    </div>
  )
}
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);