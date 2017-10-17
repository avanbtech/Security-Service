import React from 'react';
import ServiceView from './ServiceView';
import fetch from '../../core/fetch';

export const path = '/ServiceView';
export const action = async (state) => {
  const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  const { data } = await response.json();
  state.context.onSetTitle('Service View');

  var rows = [
    {
      requestBy: 'John',
      date: '2017-10-12'
    },
    {
      requestBy: 'Mary',
      date: '2016-08-12'
    }
  ];
  return <ServiceView serviceRequests={rows}/>;
};
