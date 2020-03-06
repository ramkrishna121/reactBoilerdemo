/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/index';
import NewPage from 'containers/NewPage/index';
import NotFoundPage from 'containers/NotFoundPage/index';

import GlobalStyle from '../../global-styles';

import styled from 'styled-components';

const Divison = styled.div`
  text-align: center;
`;

export default function App() {
  return (
    <Divison>
      <Switch>
        <Route exact path="/newAlternate" component={NewPage} />
        <Route exact path="/" component={HomePage} />

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Divison>
  );
}
