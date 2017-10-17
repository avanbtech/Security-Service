import React from 'react';
import ServiceView from './ServiceView';
import fetch from '../../core/fetch';

export const path = '/ServiceView';
export const action = async (state) => {
  const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  const { data } = await response.json();
  state.context.onSetTitle('Service View');

  // These data must be extracted from database
  var rows = [
    {
      requestId: '1',
      requestBy: 'John',
      date: '2017-10-12',
      sfu_id: 'johnp',
      location: 'Burnaby',
      event_date: '2017-11-10'
    },
    {
      requestId: '2',
      requestBy: 'Mary',
      date: '2016-08-12',
      sfu_id: 'maryf',
      location: 'Surrey',
      event_date: '2017-12-08'
    }
  ];
  return <ServiceView serviceRequests={rows}/>;
};
