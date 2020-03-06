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

// import HomePage from 'containers/HomePage/index';
// import NewPage from 'containers/NewPage/index';
import NotFoundPage from 'containers/NotFoundPage/index';

import GlobalStyle from '../../global-styles';

import styled from 'styled-components';

import { Suspense, lazy } from 'react';

const Divison = styled.div`
  text-align: center;
`;

const HomePage = lazy(() => import('containers/HomePage/index'));
const NewPage = lazy(() => import('containers/NewPage/index'));

export default function App() {
  return (
    <Divison>
      <Switch>
        <Route exact path="/newPage">
          <Suspense fallback={<h1>Still loading...</h1>}>
            <NewPage />
          </Suspense>
        </Route>

        <Route exact path="/">
          <Suspense fallback={<h1>Still loading...</h1>}>
            <HomePage />
          </Suspense>
        </Route>

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Divison>
  );
}
