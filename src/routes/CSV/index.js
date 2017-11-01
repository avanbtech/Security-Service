import React from 'react';
import CSV from './CSV';

export const path = '/CSV';
export const action = async (state) => {
  const title = 'CSV';
  state.context.onSetTitle(title);
  return <Customer title={title} />;
};
