import React from 'react'
import Section from '../../elements/atoms/Section';
import { List, ListItem, Avatar, ListItemText, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchbibles } from '../../../actions/book'
import axios from 'axios';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Slide from '@material-ui/core/Slide';


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class BibleList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            bible: null,
            id: 0,
        };
    }

    componentDidMount(){
        this.props.fetchbibles()
    }

    fetchbible = () => {
        axios.get(`https://api.scripture.api.bible/v1/bibles/${this.state.id}`,{ headers: { 'api-key': 'a646f4c12d612ad78f561a37530ea750' } })
            .then( ({ data }) => {
            this.setState({
                bible: data.data
            })
            // console.log(data)
            })
    }


    handleClickOpen = (id) => {
        this.setState({ id: id})
        this.fetchbible()
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    
    render() {
        const { bibles, bible } = this.props
        return(
            <div>
            <Section title="Bibles">
                {bibles.length <= 0 ? <CircularProgress />:
                <List>
                    {bibles.map((bible,index) => (
                        // <Link to={`bibledetail/${bible.id}`} >
                        // <ListItem key={bible.name} onClick={this.handleClickOpen(`${bible.id}`)} button>
                        <ListItem key={bible.name} button>
                            <Avatar style={{backgroundColor: 'red'}}>{bible.name[0].toUpperCase()}
                            </Avatar>
                            <ListItemText primary={bible.name} secondary={bible.description} />
                        </ListItem>
                        // </Link>
                        
                        
                    ))
                    }
                </List>
                }
            </Section>
            <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            >
            <DialogTitle id="alert-dialog-slide-title">
                {bible.name}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Disagree
                </Button>
                <Button onClick={this.handleClose} color="primary">
                Agree
                </Button>
            </DialogActions>
            </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bibles:state.bibles.bibles,
        bible:this.bible
    }
}

const mapDispatchToProps = dispatch => ({
    fetchbibles: () => dispatch(fetchbibles())
})

export default connect(mapStateToProps,mapDispatchToProps)(BibleList)