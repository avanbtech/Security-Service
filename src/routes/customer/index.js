import React from 'react';
import Customer from './Customer';

export const path = '/customer46';
export const action = async (state) => {
  const title = 'Customer In';
  state.context.onSetTitle(title);
  return <Customer title={title} />;
};
