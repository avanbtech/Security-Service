import React from 'react';
import SecurityViewHome from './SecurityViewHome';
import fetch from '../../core/fetch';

export const path = '/Security';
export const action = async (state) => {
  state.context.onSetTitle('SFU security request system');
  return <SecurityViewHome />;
};
