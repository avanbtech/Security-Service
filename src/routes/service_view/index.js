import React from 'react';
import ServiceViewReq from './ServiceView';
import axios from 'axios';

async function fetchData() {
  let res = null;

  await axios.post("http://localhost:3001/servicedt")
    .then(function (response) {

      res = response;
    })
    .catch(function (error) {
      console.log(error.data);
    });

  return res;
}


export const path = '/ServiceView';
export const action = async (state) => {

  state.context.onSetTitle('Service View');
  let includeBurnaby = 'include_burnaby' in state.query;
  let includeSurrey = 'include_surrey' in state.query;
  let includeVancouver = 'include_vancouver' in state.query;
  const includeAll = !includeSurrey && !includeVancouver && !includeBurnaby;
  includeBurnaby = includeBurnaby || includeAll;
  includeSurrey = includeSurrey || includeAll;
  includeVancouver = includeVancouver || includeAll;
  const hasStartDate = 'start_date' in state.query;
  let startDateFilter = '';
  let startDateFilterStr = '';
  if (hasStartDate) {
    startDateFilterStr = state.query.start_date;
    startDateFilter = Date.parse(startDateFilterStr);
  }
  const hasEndDate = 'end_date' in state.query;
  let endDateFilter = '';
  let endDateFilterStr = '';
  if (hasEndDate) {
    endDateFilterStr = state.query.end_date;
    endDateFilter = Date.parse(endDateFilterStr);
  }
  let res = [];
  await fetchData().then((response) => {
    res = response.data.reqData;
  });

  let rows = [];

  if(res != null) {
    for (let x = 0; x < res.length; x++) {
      const requestDateStr = res[x]['date'].split("T")[0];
      const requestDate = Date.parse(requestDateStr);
      const validDate = (!hasStartDate || requestDate >= startDateFilter) &&
        (!hasEndDate || requestDate <= endDateFilter);
      if (!validDate) {
        continue;
      }
      const location = res[x]['event']['location'];
      const locationValid = (includeBurnaby && location === 'Burnaby') ||
        (includeSurrey && location === 'Surrey') ||
        (includeVancouver && location === 'Vancouver');
      if (!locationValid) {
        continue;
      }
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
  }

  const filterObject = {
    'includeBurnaby':includeBurnaby,
    'includeSurrey':includeSurrey,
    'includeVancouver':includeVancouver,
    'start_date':startDateFilterStr,
    'end_date':endDateFilterStr
  };
  return <ServiceViewReq
    serviceRequests={rows}
    filterObject={filterObject}
  />;
};


