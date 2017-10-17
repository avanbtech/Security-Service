import React from 'react';
import ServiceView from './ServiceView';
import fetch from '../../core/fetch';
const requestController = require('../../controllers/request_controller');

export const path = '/ServiceView';
export const action = async (state) => {
  const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  const { data } = await response.json();
  state.context.onSetTitle('Service View');
  return <ServiceView />;
};
