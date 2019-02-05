import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './provider';
import Wrapper from './wrapper';
import PageOne from './page-one';
import PageTwo from './page-two';

const Router = () => (
  <BrowserRouter>
    <Provider>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/two" component={PageTwo} />
        </Switch>
      </Wrapper>
    </Provider>
  </BrowserRouter>
);

export default Router;