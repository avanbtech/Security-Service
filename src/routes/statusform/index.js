import React from 'react';

import StatusForm from './StatusForm';

export const path = '/StatusForm';
export const action = async (state) => {
  const title = 'Status form that displays current request status and information user entered';
  state.context.onSetTitle(title);
  return <StatusForm title={title} />;
};
