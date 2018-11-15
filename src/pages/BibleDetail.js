import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid, Avatar, CircularProgress, CardMedia, List, ListItem, ListItemText } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux'
import Section from '../lib/elements/atoms/Section'
import { fetchbible } from '../actions/book'
import DetailDrawer from '../lib/components/Bibles/Detail'
import Verses from './Verses'
import { Provider } from 'react-redux'
import myStore from '../config/store'
import {  BrowserRouter,  Route } from 'react-router-dom';

class BibleDetail extends React.Component {
  constructor(props){
    super(props)
    
  }

    render() {
      const { app, classes, bible } = this.props
  
      return  (
        <React.Fragment>
                <DetailDrawer bible={bible}/>
        </React.Fragment>
      ) 
    }
  }

  const styles = theme => ({
    appBar: {
      position: 'relative',
    },
    icon: {
      marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
      backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
      marginTop: theme.spacing.unit * 4,
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    cardGrid: {
      padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 6,
    },
  });

const mapStateToProps = (state) => {
  return {
      app:state.app, 
      bibles: state.bibles, 
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchbible: () => dispatch(fetchbible())
// })

  BibleDetail.propTypes = {
    classes: PropTypes.object.isRequired,
  };

BibleDetail = connect(mapStateToProps)(BibleDetail)

export default withStyles(styles)(BibleDetail)