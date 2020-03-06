/*
 * Artists Messages
 *
 * This contains all the text for the Artists component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Artists';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Artists component!',
  },
});
