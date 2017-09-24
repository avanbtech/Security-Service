import React from 'react';
import Request from './Request';

export const path = '/Request';
export const action = async (state) => {
  const title = 'Request form';
  state.context.onSetTitle(title);
  return <Request title={title} />;
};
