import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Suspense, lazy } from 'react';

const Artists = lazy(() => import('../../components/Artists/index'));

import styled from 'styled-components';

const Divison = styled.div`
  /* background-color : black; */
  background-image: url('https://www.agernic.com/uploads/css-background-image-size-fit-full-screen.jpg');
  background-size: cover;
`;

export default function NewPage() {
  return (
    <Divison>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Suspense fallback={<h1>Still loading...</h1>}>
        <Artists />
      </Suspense>
    </Divison>
  );
}
