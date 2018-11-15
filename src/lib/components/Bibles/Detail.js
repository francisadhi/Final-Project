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
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux'
import { fetchbiblechapters } from '../../../actions/book'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
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

    // this.state = {
    //   bookData: [],
    //   bible: this.props.bible,
    //   // id:this.bible.data.id
    // }
  }

  // componentDidMount() {
  //   const { match } = this.props
  //   axios.get(`https://api.scripture.api.bible/v1/bibles/${this.props.bible.id}/books`,{ headers: { 'api-key': '6203c1c09761df55ea32eac2b4f2b09f' } })
  //     .then( ( response ) => {
  //       this.setState({
  //         bookData: response.data.data
  //       })
  //       // console.log(this.state.bible)
  //       console.log(this.props.bibles.bibles)
  //     })
  // }

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
  const { classes, bibles } = this.props
  // const { bookData } = this.state

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {this.props.bibles.name}
          </Typography>
          <div className={classes.grow} />
          <Link to={`/`}  style={{textDecoration: 'none', width: 200, color: 'white'}} >
          <IconButton
            aria-haspopup="true"
            color="inherit"
          >
            <ExitToApp />
          </IconButton>
          </Link>
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
          {bibles.books.map((bible, index) => (
            <Link to={`/bibledetail/verses/${bible.id}`}  style={{textDecoration: 'none'}} >
            <ListItem key={bible.name} onClick={() => this.props.magicButton(`${bible.bibleId}`,`${bible.id}`)} button>
              <Avatar style={{backgroundColor: 'red'}}>{bible.name[0].toUpperCase()}
              </Avatar>
              <ListItemText primary={bible.name} />
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route path={`/bibledetail/verses/:id`} component={Verses} />
      </main>
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    bibles: state.bibles, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      magicButton: (bibleId, id) => dispatch(fetchbiblechapters(bibleId, id))
  }
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

ClippedDrawer = connect(mapStateToProps, mapDispatchToProps)(ClippedDrawer)

export default withStyles(styles)(ClippedDrawer);