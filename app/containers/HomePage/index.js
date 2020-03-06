/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Suspense, lazy } from 'react';

import { Link } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';

const Artists = lazy(() => import('../../components/Artists/index'));

const Division = styled.div`
  background-image: linear-gradient(to bottom right, white, blue);
`;

export default function HomePage() {
  return (
    <Division>
      <h1>
        <FormattedMessage {...messages.header} /> <br />
        <Link to="/newAlternate">Go to New Alternate Page</Link> <br />
        <Link>Go to other app</Link>
      </h1>
      <Suspense fallback={<h1>Still loading...</h1>}>
        <Artists />
      </Suspense>
    </Division>
  );
}
