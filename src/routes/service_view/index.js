import React from 'react';
import ServiceViewReq from './ServiceView';
import fetch from '../../core/fetch';
import axios from 'axios';

export const path = '/ServiceView';
export const action = async (state) => {
  const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  const { data } = await response.json();
  state.context.onSetTitle('Service View');

  let res = null;

  await axios.post('http://localhost:3001/graphql', {
    query: '{request{accessID user{requestBy sfuBCID} date event{eventDates location}}}',
  })
    .then(function (response) {
      if(response['data']['data']['request']) {
        res = response.data['data']['request'];
      }
    })
    .catch(function (error) {
      console.log(error.data);
    });

  let rows = [];

  for(let x = 0; x < res.length; x++) {
    rows.push({
      requestId: res[x]['accessID'],
      requestBy: res[x]['user']['requestBy'],
      date: res[x]['date'].split("T")[0],
      sfu_id: res[x]['user']['sfuBCID'],
      location: res[x]['event']['location'],
      event_date: res[x]['event']['eventDates'],
    });
  }


  console.log('INDEX');
  return <ServiceViewReq serviceRequests={rows}/>;
};
