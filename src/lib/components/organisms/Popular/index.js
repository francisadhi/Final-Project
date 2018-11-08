import React from 'react';
// import './Meetup.css';
import Button from '../../../elements/atoms/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Section from '../../../elements/atoms/Section'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux'
import { fetchbooks } from '../../../../actions/book'

class Popular extends React.Component {
  componentDidMount(){
    this.props.fetchbooks()
  }
  render(){
    const { books, classes } = this.props

    return(
      <Section title="Buku-buku Terpopuler">
            {books.length <= 0 ? <CircularProgress /> :
            <Grid container spacing={40}>
            {books.map(book => (
              <Grid item key={book} sm={6} md={4} lg={3}>
                <Card className={classes.book}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {book.nama}
                    </Typography>
                    <Typography>
                      {book.deskripsi}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="grey">
                      View
                    </Button>
                    <Button color="grey">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
              </Grid>
            }
              </Section>
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
    books : state.books.bookData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchbooks : () => dispatch(fetchbooks())
  }
}

Popular.propTypes = {
  classes: PropTypes.object.isRequired,
};

Popular = connect(mapStateToProps,mapDispatchToProps)(Popular)

export default withStyles(styles)(Popular);