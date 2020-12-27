import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import language from './pages/language';
import pt from './pages/pt';
import eng from './pages/eng';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={language} />
                <Route path="/eng" component={eng} />
                <Route path="/pt" component={pt} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;