import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { connect } from 'react-redux'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    // margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Verses extends React.Component {
  render(){
  const { classes, chapters } = this.props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      {chapters.chapters.map((bible, index) => (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {bible.chapterId}
          {/* {props.books.books.data.bibleId}{props.books.books.data.bibleId}{props.books.books.data.bibleId}{props.books.books.data.bibleId}{props.books.books.data.bibleId}{props.books.books.data.bibleId}{props.books.books.data.bibleId}{props.books.books.data.bibleId}{props.books.books.data.bibleId} */}
        </Typography>
        <Typography variant="h5" component="h2">
          {bible.number}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    ))}
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    chapters: state.bibles, 
  }
}

Verses.propTypes = {
  classes: PropTypes.object.isRequired,
};

Verses = connect(mapStateToProps)(Verses)

export default withStyles(styles)(Verses);