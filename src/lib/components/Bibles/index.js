import React from 'react'
import Section from '../../elements/atoms/Section';
import { List, ListItem, Avatar, ListItemText, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchbibles } from '../../../actions/book'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { fetchbiblebooks, fetchbible } from '../../../actions/book'


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class BibleList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            bible: [],
            id: '2dd568eeff29fb3c-01',
        };
    }

    componentDidMount(){
        this.props.fetchbibles()
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

            {/* <Provider store={myStore}>
                <BrowserRouter> */}
                <div>
                    
                    <Section title="Bibles">
                        {/* <Button onClick={this.handleClickOpen(this.state.id)}>Open responsive dialog</Button> */}
                        {bibles.length <= 0 ? <CircularProgress />:
                        <List>
                            {bibles.map((bible,index) => (
                                <Link to={`bibledetail/${bible.id}`} style={{textDecoration: 'none'}}>
                                <ListItem key={bible.id} bible={bible} onClick={() => this.props.magicButton(`${bible.id}`)} button>
                                    <Avatar style={{backgroundColor: 'red'}}>{bible.name[0].toUpperCase()}
                                    </Avatar>
                                    <ListItemText primary={bible.name} secondary={bible.description} />
                                </ListItem>
                                </Link>
                                
                                
                            ))
                            }
                        </List>
                        }
                    </Section>
                    {/* <Route path="/detail/:id" component={Detail}/> */}
                </div>
                {/* </BrowserRouter>
            </Provider> */}
            <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            >
            <DialogTitle id="alert-dialog-slide-title">
                {this.state.bible.name}
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
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchbibles: () => dispatch(fetchbibles()),
    magicButton: (bibleId) => dispatch(fetchbiblebooks(bibleId),fetchbible(bibleId)),
    // magicButton: (bibleId) => dispatch(fetchbible(bibleId)),

})

export default connect(mapStateToProps,mapDispatchToProps)(BibleList)