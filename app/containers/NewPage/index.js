import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Suspense, lazy } from 'react';

const Artists = lazy(() => import('../../components/Artists/index'));

import styled from 'styled-components';

const Divison = styled.div`
  /* background-color : black; */
  background-image: url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg');
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
