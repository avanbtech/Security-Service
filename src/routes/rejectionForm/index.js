import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import RejectionForm from './RejectionForm';

export const path = '/';
export const action = async (state) => {
  state.context.onSetTitle('Rejection Form');
  return <RejectionForm />;
};
