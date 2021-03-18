import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './page/Home';
import Historic from './page/Historic';
import CarSale from './page/CarsSale';
import Members from './page/Members';
import Partners from './page/Partners';
import Projects from './page/Projects';
import NotFound from './page/NotFound';
import Insertions from './page/Insertions';
import Admin from './page/Admin';


export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/historic">
                <Historic />
            </Route>
            <Route exact path="/sale" >
                <CarSale />
            </Route>
            <Route exact path="/members">
                <Members />
            </Route>
            <Route exact path="/partners">
                <Partners />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/insertions">
                <Insertions />
            </Route>
            <Route exact path="/admin">
                <Admin />
            </Route>
            <Route  >
                <NotFound />
            </Route>
        </Switch>
    );
}