import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, CircularProgress } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Verses from './Versers'
import {  Route } from 'react-router-dom';
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
  }

  render(){
  const { classes, bibles, bible } = this.props
  // const { bookData } = this.state

  return bibles.books.length ? (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {/* {bible.id} */}
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
        {/* {bibles.books.length <= 0 ? <CircularProgress />: */}
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
  ) : <CircularProgress />
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