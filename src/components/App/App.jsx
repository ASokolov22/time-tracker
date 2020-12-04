import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './App.css';

import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import TrackDetails from '../TrackDetails/TrackDetails';

function App() {
    return (
        <div className="App">
            <BrowserRouter history={createBrowserHistory()}>
                <Header/>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/details' component={TrackDetails}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;