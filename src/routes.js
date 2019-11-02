import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Todo from './pages/Todo';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Todo />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;