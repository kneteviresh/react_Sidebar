import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Dummy from './dummyPage.jsx';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/dummy' component={Dummy} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);