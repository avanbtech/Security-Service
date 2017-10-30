import React from 'react';
import ServiceView from './ServiceView';
import fetch from '../../core/fetch';
import dbMethods from '../../core/dbFetchMethods';

export const path = '/ServiceView';
export const action = async (state) => {
  const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  const { data } = await response.json();
  state.context.onSetTitle('Service View');

  let res = await dbMethods.getReqForServiceView();

  let rows = [];

  for(let x = 0; x < res.length; x++) {
    rows.push({
      requestId: res[x]['accessID'],
      requestBy: res[x]['user']['requestBy'],
      date: res[x]['date'].split("T")[0],
      status: res[x]['status'],
      sfu_id: res[x]['user']['sfuBCID'],
      location: res[x]['event']['location'],
      event_date: res[x]['event']['eventDates'],
    });
  }

  return <ServiceView serviceRequests={rows}/>;
};
