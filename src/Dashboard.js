import React, { Component } from 'react';
import Navbar from './lib/components/organisms/Navbar'
import Footer from './lib/components/organisms/Footer'
import { Provider } from 'react-redux'
import myStore from './config/store'
import {  BrowserRouter,  Route } from 'react-router-dom';
import Home from './pages/Home'
import Bookdetail from './pages/Bookdetail'
import Books from './pages/Books'
import BibleDetail from './pages/BibleDetail';

class Dashboard extends React.Component {
    render(){
        return (
            <Provider store={myStore}>
                <BrowserRouter>
                <div>
                    <Navbar />
                    <Route exact path="/" render={() => (
                        <Home/>
                    )} />
                    <Route path="/bookdetail/:id" component={Bookdetail}/>
                    <Route path="/books" component={Books}/>
                    <Route path="/bibledetail/:id" component={BibleDetail}/>
                    <Footer />
                </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default Dashboard

