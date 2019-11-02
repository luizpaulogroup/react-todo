import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import User from './pages/User';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <User />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;