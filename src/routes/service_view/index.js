import React from 'react';
import ServiceView from './ServiceView';
import fetch from '../../core/fetch';
import makePOST from './databaseQuery';


import axios from 'axios';

function getAllReqData() {
  //console.log("\n\n\nHRE\n\n\n");
  let res = null;

  axios.post('http://localhost:3001/graphql', {
    query: '{request{dbID}}',
  })
    .then(function (response) {
      if(response['data']['data']['request']) {
        res = response['data']['data']['request'];
      }

      return res;
    })
    .catch(function (error) {
      console.log(error);
    });

  //return res;
}


export const path = '/ServiceView';
export const action = async (state) => {
  const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  const { data } = await response.json();
  state.context.onSetTitle('Service View');

  // TODO: Replace following statement to retrieve data from database and store them in rows


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

  console.log(res);

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

  // for(var req in res) {
  //   rows.push({
  //     requestId: req['accessID'],
  //     requestBy: req['user']['requestBy'],
  //     date: req['date'],
  //     sfu_id: "301298937",
  //     location: "JOHN",
  //     event_date: "DSFS",
  //   });
  // }

  // var rows = [
  //   {
  //     requestId: '1',
  //     requestBy: 'John',
  //     date: '2017-10-12',
  //     sfu_id: 'johnp',
  //     location: 'Burnaby',
  //     event_date: '2017-11-10'
  //   },
  //   {
  //     requestId: '2',
  //     requestBy: 'Mary',
  //     date: '2016-08-12',
  //     sfu_id: 'maryf',
  //     location: 'Surrey',
  //     event_date: '2017-12-08'
  //   }
  // ];

  return <ServiceView serviceRequests={rows}/>;
};
