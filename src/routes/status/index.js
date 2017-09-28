import React from 'react';
import Status from './Status';

export const path = '/Status';
export const action = async (state) => {
  const title = 'Status In';
  state.context.onSetTitle(title);
  return <Status title={title} />;
};
