import React from 'react';
import Register from './Register';

export const path = '/register';
export const action = async (state) => {
  const title = 'Security Staff Login';
  state.context.onSetTitle(title);
  return <Register title={title} />;
};
