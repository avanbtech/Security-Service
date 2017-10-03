{/*Imports react*/}
import React from 'react';

{/*The main javascript page that is being used for this index*/}
import Status from './Status';

{/*The url directory this page is stored in, i.e: localhost:3000/Status*/}
export const path = '/Status';

{/*Some status settings. Mainly sets a title variable at the moment that can be used in Status.js*/}
export const action = async (state) => {

  const title = 'Check current status of request';

  state.context.onSetTitle(title);
  return <Status title={title} />;
};
